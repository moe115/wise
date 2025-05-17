'use client'

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import PolygonDrawer from './PolygonDrawer.js';
import FixLeafletIcons from './FixLeafletIcons';

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

function MapComponent({ position, onPolygonDrawn }) {
  return (
    <>
      <FixLeafletIcons />
      <MapContainer
      center={[33.8938, 35.5018]} // Default center: Beirut, Lebanon
      zoom={10}
      style={{ height: '300px', width: '100%' }}
    >
      <PolygonDrawer onPolygonDrawn={onPolygonDrawn} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FlyToLocation position={position} />
    </MapContainer>
    </>
  );
}

export default MapComponent;