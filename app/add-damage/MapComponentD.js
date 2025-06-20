import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Circle, useMap, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';

// Fix for default markers in Leaflet with Next.js
const defaultIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

function MapClickHandler({ onPositionChange }) {
  useMapEvents({
    click(e) {
      onPositionChange({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
}

// Component to fly to a location on the map
function FlyToLocation({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo([position.lat, position.lng], 13);
    }
  }, [map, position]);

  return null;
}

const MapComponentD = ({ position, radius, crisisData, mapBounds, onMapClick, formatPolygonCoordinates }) => {
  const mapRef = useRef(null);

  // Get crisis polygon coordinates for display
  const crisisPolygonCoordinates = crisisData ? formatPolygonCoordinates(crisisData.geometry) : [];

  // Convert our simple bounds object back to Leaflet bounds if needed
  const leafletBounds = mapBounds && typeof window !== 'undefined' ?
    L.latLngBounds(
      [mapBounds.south, mapBounds.west],
      [mapBounds.north, mapBounds.east]
    ) : null;

  return (
    <MapContainer
      center={mapBounds ? [mapBounds.center.lat, mapBounds.center.lng] : [33.8938, 35.5018]}
      zoom={leafletBounds ? undefined : 10}
      bounds={leafletBounds}
      style={{ height: '400px', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler onPositionChange={onMapClick} />

      {/* Display crisis area polygon */}
      {crisisPolygonCoordinates.length > 0 && (
        <Polygon
          positions={crisisPolygonCoordinates}
          pathOptions={{
            fillColor: crisisData.color || '#ff0000',
            fillOpacity: 0.2,
            color: crisisData.color || '#ff0000',
            weight: 2,
            dashArray: '5, 10'
          }}
        />
      )}

      {/* Display damage location marker and circle */}
      {position && (
        <>
          <Marker position={[position.lat, position.lng]} />
          {radius > 0 && (
            <Circle
              center={[position.lat, position.lng]}
              radius={parseInt(radius)}
              pathOptions={{ color: 'red', fillColor: '#f03', fillOpacity: 0.2 }}
            />
          )}
          <FlyToLocation position={position} />
        </>
      )}
    </MapContainer>
  );
};

export default MapComponentD;