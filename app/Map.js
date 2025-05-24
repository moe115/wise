'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Circle } from 'react-leaflet';
import { useRouter } from 'next/navigation';
import L from 'leaflet';

// This component needs to be in a separate file to be dynamically imported
const Map = ({ crises, typeColors }) => {
  const router = useRouter();
  const [damages, setDamages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDamages, setShowDamages] = useState(true);

  // Set up Leaflet icons once the component mounts (client-side only)
  React.useEffect(() => {
    // Fix for default Leaflet markers
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
    });
    
    // Clean up to prevent memory leaks
    return () => {
      // Any cleanup if needed
    };
  }, []);

  // Fetch damages when component mounts
  useEffect(() => {
    fetchDamages();
  }, []);

  const fetchDamages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/get-damages');
      
      if (!response.ok) {
        throw new Error('Failed to fetch damages');
      }
      
      const data = await response.json();
      setDamages(data.damages || []);
    } catch (error) {
      console.error('Error fetching damages:', error);
    } finally {
      setLoading(false);
    }
  };

  // Create custom marker icons for crises
  const createCustomIcon = (color) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  };

  // Create custom damage marker icons based on damage category
  const createDamageIcon = (category) => {
    const damageColors = {
      'collapsed': '#8B0000',      // Dark red
      'flooded-house': '#4169E1',  // Royal blue
      'burned-house': '#FF4500',   // Orange red
      'injuries': '#FFD700',       // Gold
      'death': '#000000',          // Black
      'stuck': '#800080',          // Purple
      'infrastructure': '#708090', // Slate gray
      'environmental': '#228B22',  // Forest green
      'other': '#696969'           // Dim gray
    };

    const color = damageColors[category] || damageColors.other;
    
    return L.divIcon({
      className: 'damage-marker',
      html: `<div style="
        background-color: ${color}; 
        width: 16px; 
        height: 16px; 
        border-radius: 3px; 
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  };

  // Create icons object from type colors
  const icons = {};
  Object.keys(typeColors).forEach(type => {
    icons[type] = createCustomIcon(typeColors[type]);
  });

  // Default center if no crises data (New York City)
  const defaultCenter = [40.7128, -74.0060];
  const zoom = 11;
  
  // Process GeoJSON polygon coordinates for Leaflet
  // GeoJSON format: [longitude, latitude]
  // Leaflet format: [latitude, longitude]
  const formatPolygonCoordinates = (geometry) => {
    if (!geometry || !geometry.coordinates || !geometry.coordinates[0]) {
      return [];
    }
    
    // Handle only the exterior ring (first array in coordinates)
    // And flip the coordinates for Leaflet
    return geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
  };

  // Calculate center point of polygon for marker placement
  const calculateCenter = (polygon) => {
    if (!polygon || polygon.length === 0) return defaultCenter;
    
    let lat = 0, lng = 0;
    polygon.forEach(point => {
      lat += point[0];
      lng += point[1];
    });
    
    return [lat / polygon.length, lng / polygon.length];
  };
  
  // Find bounds for the map based on all polygons and damages
  const getBounds = () => {
    const allPoints = [];
    
    // Add crisis polygon points
    if (crises && crises.length > 0) {
      crises.forEach(crisis => {
        const coordinates = formatPolygonCoordinates(crisis.geometry);
        allPoints.push(...coordinates);
      });
    }
    
    // Add damage points
    if (damages && damages.length > 0) {
      damages.forEach(damage => {
        if (damage.coordinates) {
          allPoints.push([damage.coordinates.latitude, damage.coordinates.longitude]);
        }
      });
    }
    
    if (allPoints.length === 0) {
      return L.latLngBounds([defaultCenter, defaultCenter]);
    }
    
    return L.latLngBounds(allPoints);
  };

  // Handle navigation to add damage page
  const handleAddDamage = (crisis) => {
    // Prepare crisis data to pass
    const crisisData = {
      id: crisis.id,
      name: crisis.name,
      type: crisis.type,
      country: crisis.country,
      geometry: crisis.geometry,
      color: typeColors[crisis.type] || typeColors.default
    };
    
    // Navigate to add-damage page with crisis data as query parameters
    const queryParams = new URLSearchParams({
      crisisId: crisis.id,
      crisisData: JSON.stringify(crisisData)
    });
    
    router.push(`/add-damage?${queryParams.toString()}`);
  };

  // Handle navigation to add testimony page
  const handleAddTestimony = (damage) => {
    // Navigate to add-testimony page with damage data
    const queryParams = new URLSearchParams({
      damageId: damage.id,
      damageData: JSON.stringify(damage)
    });
    
    router.push(`/add-testimony?${queryParams.toString()}`);
  };

  // Handle navigation to testimonies page
  const handleSeeTestimonies = (damage) => {
    // Navigate to testimonies page with damage data
    const queryParams = new URLSearchParams({
      damageId: damage.id,
      damageData: JSON.stringify(damage)
    });
    
    router.push(`/testimonies?${queryParams.toString()}`);
  };

  // Format currency
  const formatCurrency = (amount) => {
    if (!amount) return 'Not specified';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Format damage category for display
  const formatDamageCategory = (category) => {
    const categoryMap = {
      'collapsed': 'Collapsed Building',
      'flooded-house': 'Flooded House',
      'burned-house': 'Burned House',
      'injuries': 'Injuries',
      'death': 'Death',
      'stuck': 'Stuck People',
      'infrastructure': 'Infrastructure Damage',
      'environmental': 'Environmental Damage',
      'other': 'Other'
    };
    return categoryMap[category] || category;
  };

  return (
    <div>
      {/* Toggle controls */}
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        right: '10px', 
        zIndex: 1000, 
        background: 'white', 
        padding: '10px', 
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input
            type="checkbox"
            checked={showDamages}
            onChange={(e) => setShowDamages(e.target.checked)}
          />
          Show Damages ({damages.length})
        </label>
        {loading && <div style={{ fontSize: '12px', color: '#666' }}>Loading damages...</div>}
      </div>

      <MapContainer 
        zoom={zoom}
        style={{ height: "600px", width: "100%" }}
        scrollWheelZoom={true}
        bounds={getBounds()}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Render Crisis Areas */}
        {crises.map(crisis => {
          const polygonCoordinates = formatPolygonCoordinates(crisis.geometry);
          const center = calculateCenter(polygonCoordinates);
          const icon = icons[crisis.type] || icons.default;
          
          return (
            <React.Fragment key={`crisis-${crisis.id}`}>
              {/* Crisis area polygon */}
              {polygonCoordinates.length > 0 && (
                <Polygon 
                  positions={polygonCoordinates}
                  pathOptions={{
                    fillColor: typeColors[crisis.type] || typeColors.default,
                    fillOpacity: 0.3,
                    color: typeColors[crisis.type] || typeColors.default,
                    weight: 2
                  }}
                >
                  <Popup>
                    <div style={{ minWidth: '200px' }}>
                      <h3 style={{ fontWeight: 'bold', marginBottom: '8px' }}>{crisis.name}</h3>
                      <p style={{ marginBottom: '4px' }}>{crisis.description}</p>
                      <p style={{ marginBottom: '4px' }}><strong>Type:</strong> {crisis.type}</p>
                      <p style={{ marginBottom: '8px' }}><strong>Country:</strong> {crisis.country}</p>
                      {crisis.startDate && (
                        <p style={{ marginBottom: '8px' }}><strong>Start:</strong> {new Date(crisis.startDate).toLocaleDateString()}</p>
                      )}
                      <div style={{ marginTop: '8px' }}>
                        <button 
                          style={{
                            backgroundColor: '#3B82F6',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            border: 'none',
                            fontSize: '12px',
                            marginRight: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          View Details
                        </button>
                        <button 
                          style={{
                            backgroundColor: '#10B981',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            border: 'none',
                            fontSize: '12px',
                            cursor: 'pointer'
                          }}
                          onClick={() => handleAddDamage(crisis)}
                        >
                          Add Damage
                        </button>
                      </div>
                    </div>
                  </Popup>
                </Polygon>
              )}
            </React.Fragment>
          );
        })}

        {/* Render Damage Points */}
        {showDamages && damages.map(damage => (
          <React.Fragment key={`damage-${damage.id}`}>
            {/* Damage marker */}
            <Marker 
              position={[damage.coordinates.latitude, damage.coordinates.longitude]}
              icon={createDamageIcon(damage.category)}
            >
              <Popup>
                <div style={{ minWidth: '250px' }}>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '8px', color: '#DC2626' }}>
                    Damage Report #{damage.id}
                  </h3>
                  
                  <div style={{ marginBottom: '8px' }}>
                    <p style={{ marginBottom: '4px' }}>
                      <strong>Type:</strong> {formatDamageCategory(damage.category)}
                    </p>
                    <p style={{ marginBottom: '4px' }}>
                      <strong>City:</strong> {damage.city}
                    </p>
                    {damage.crisis.name && (
                      <p style={{ marginBottom: '4px' }}>
                        <strong>Crisis:</strong> {damage.crisis.name}
                      </p>
                    )}
                  </div>

                  {damage.description && (
                    <div style={{ marginBottom: '8px' }}>
                      <strong>Description:</strong>
                      <p style={{ fontSize: '12px', marginTop: '2px' }}>{damage.description}</p>
                    </div>
                  )}

                  <div style={{ fontSize: '12px', marginBottom: '8px' }}>
                    {damage.startDate && (
                      <p style={{ marginBottom: '2px' }}>
                        <strong>Start:</strong> {new Date(damage.startDate).toLocaleDateString()}
                      </p>
                    )}
                    {damage.endDate && (
                      <p style={{ marginBottom: '2px' }}>
                        <strong>End:</strong> {new Date(damage.endDate).toLocaleDateString()}
                      </p>
                    )}
                    {damage.financialEstimation && (
                      <p style={{ marginBottom: '2px' }}>
                        <strong>Est. Cost:</strong> {formatCurrency(damage.financialEstimation)}
                      </p>
                    )}
                    {damage.radius && (
                      <p style={{ marginBottom: '2px' }}>
                        <strong>Radius:</strong> {damage.radius}m
                      </p>
                    )}
                  </div>

                  <div style={{ 
                    fontSize: '11px', 
                    color: '#666', 
                    marginBottom: '8px',
                    borderTop: '1px solid #eee',
                    paddingTop: '4px'
                  }}>
                    <p>Lat: {damage.coordinates.latitude.toFixed(6)}</p>
                    <p>Lng: {damage.coordinates.longitude.toFixed(6)}</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                    <button 
                      style={{
                        backgroundColor: '#8B5CF6',
                        color: 'white',
                        padding: '6px 8px',
                        borderRadius: '4px',
                        border: 'none',
                        fontSize: '11px',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleAddTestimony(damage)}
                    >
                      Add Testimony
                    </button>
                    <button 
                      style={{
                        backgroundColor: '#06B6D4',
                        color: 'white',
                        padding: '6px 8px',
                        borderRadius: '4px',
                        border: 'none',
                        fontSize: '11px',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleSeeTestimonies(damage)}
                    >
                      See Testimonies
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>

            {/* Damage radius circle */}
            {damage.radius && (
              <Circle
                center={[damage.coordinates.latitude, damage.coordinates.longitude]}
                radius={damage.radius}
                pathOptions={{
                  color: '#DC2626',
                  fillColor: '#FEE2E2',
                  fillOpacity: 0.2,
                  weight: 1,
                  dashArray: '3, 3'
                }}
              />
            )}
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;