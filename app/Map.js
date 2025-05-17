
'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';

// This component needs to be in a separate file to be dynamically imported
const Map = ({ crises, typeColors }) => {
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

  // Create custom marker icons
  const createCustomIcon = (color) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
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
  
  // Find bounds for the map based on all polygons
  const getBounds = () => {
    if (!crises || crises.length === 0) {
      return L.latLngBounds([defaultCenter, defaultCenter]);
    }
    
    const allPoints = crises.flatMap(crisis => {
      const coordinates = formatPolygonCoordinates(crisis.geometry);
      return coordinates;
    });
    
    if (allPoints.length === 0) {
      return L.latLngBounds([defaultCenter, defaultCenter]);
    }
    
    return L.latLngBounds(allPoints);
  };

  return (
    <MapContainer 
      // center={defaultCenter}
      zoom={zoom}
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={true}
      bounds={getBounds()}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {crises.map(crisis => {
        const polygonCoordinates = formatPolygonCoordinates(crisis.geometry);
        const center = calculateCenter(polygonCoordinates);
        const icon = icons[crisis.type] || icons.default;
        
        return (
          <React.Fragment key={crisis.id}>
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
                  <div>
                    <h3 className="font-bold">{crisis.name}</h3>
                    <p>{crisis.description}</p>
                    <p><strong>Type:</strong> {crisis.type}</p>
                    <p><strong>Country:</strong> {crisis.country}</p>
                    {crisis.startDate && (
                      <p><strong>Start:</strong> {new Date(crisis.startDate).toLocaleDateString()}</p>
                    )}
                    <div className="mt-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2">
                        View Details
                      </button>
                      <button className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                       add damage
                      </button>
                             <p>{crisis.description}</p>
                    </div>
                  </div>
                </Popup>
              </Polygon>
            )}
            
            {/* Center marker */}
            {/* <Marker position={center} icon={icon}>
              <Popup>
                <div>
                  <h3 className="font-bold">{crisis.name}</h3>
                  <p>{crisis.description}</p>
                </div>
              </Popup>
            </Marker> */}
          </React.Fragment>
        );
      })}
    </MapContainer>
  );
};

export default Map;