'use client';

import React from 'react';
import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';

// This component needs to be in a separate file to be dynamically imported
const Map = ({ damages, severityColors, categoryColors }) => {
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

  // Create icons object from category colors
  const icons = {};
  Object.keys(categoryColors).forEach(category => {
    icons[category] = createCustomIcon(categoryColors[category]);
  });

  // Center the map on New York City
  const center = [40.7128, -74.0060];
  const zoom = 11;
  
  return (
    <MapContainer 
      center={center}
      zoom={zoom}
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {damages.map(damage => {
        const position = damage.coordinates; // [lat, lng]
        const icon = icons[damage.category] || icons.default;
        
        return (
          <React.Fragment key={damage.damage_id}>
            {/* Damage area circle */}
            <Circle 
              center={position}
              radius={damage.radius}
              pathOptions={{
                fillColor: severityColors[damage.severity] || '#7f8c8d',
                fillOpacity: 0.3,
                color: severityColors[damage.severity] || '#7f8c8d',
                weight: 1
              }}
            >
              <Popup>
                <div>
                  <h3 className="font-bold">{damage.category}</h3>
                  <p><strong>Location:</strong> {damage.location_name}</p>
                  <p><strong>Severity:</strong> {damage.severity}</p>
                  {damage.quantity && <p><strong>Quantity:</strong> {damage.quantity}</p>}
                  {damage.financial_estimate && (
                    <p><strong>Est. Financial Impact:</strong> ${damage.financial_estimate.toLocaleString()}</p>
                  )}
                  <div className="mt-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2">
                      View Details
                    </button>
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                      Offer Help
                    </button>
                  </div>
                </div>
              </Popup>
            </Circle>
            
            {/* Center marker */}
            <Marker position={position} icon={icon}>
              <Popup>
                <div>
                  <h3 className="font-bold">{damage.category}</h3>
                  <p>{damage.location_name}</p>
                </div>
              </Popup>
            </Marker>
          </React.Fragment>
        );
      })}
    </MapContainer>
  );
};

export default Map;