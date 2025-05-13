'use client';  

import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './page.module.css';  

import L from 'leaflet';
 
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

function CrisisReportForm() {
  const [position, setPosition] = useState(null);
  const [radius, setRadius] = useState(500); // Default radius value
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [crisisType, setCrisisType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const mapRef = useRef(null);

  const handleMapClick = (newPosition) => {
    setPosition(newPosition);
    // Clear search results when manually clicking on map
    setSearchResults([]);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=5`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for location:', error);
      alert('Error searching for location. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectLocation = (result) => {
    const newPosition = { 
      lat: parseFloat(result.lat), 
      lng: parseFloat(result.lon) 
    };
    
    setPosition(newPosition);
    setCity(result.display_name.split(',')[0]); // Set city to first part of display name
    setSearchResults([]); // Clear search results
    setSearchQuery(''); // Clear search query
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would send the form data (position, radius, description, etc.) to your backend
    console.log({ position, radius, description, city, crisisType });
    alert('Crisis reported!'); // Replace with actual submission logic
  };

  return (
    <div className={styles.container}>
      <h1>Report a Crisis Event</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="location">Search Location:</label>
          <div className={styles.searchContainer}>
            <input
              type="text"
              id="location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a location..."
              className={styles.searchInput}
            />
            <button 
              type="button" 
              onClick={handleSearch} 
              className={styles.searchButton}
              disabled={isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
          
          {searchResults.length > 0 && (
            <div className={styles.searchResults}>
              {searchResults.map((result) => (
                <div 
                  key={result.place_id} 
                  className={styles.searchResultItem}
                  onClick={() => handleSelectLocation(result)}
                >
                  {result.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className={styles.mapContainer}>
          <MapContainer
            center={[33.8938, 35.5018]} // Default center: Beirut, Lebanon
            zoom={10}
            style={{ height: '300px', width: '100%' }}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler onPositionChange={handleMapClick} />
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
          <p>Click on the map to select the crisis location or use the search above.</p>
          {position && <p>Selected Coordinates: Latitude: {position.lat.toFixed(6)}, Longitude: {position.lng.toFixed(6)}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="radius">Radius: {radius} meters</label>
          <div className={styles.sliderContainer}>
            <input
              type="range"
              id="radius"
              min="50"
              max="50000"
              step="50"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className={styles.slider}
            />
            <div className={styles.sliderLabels}>
              <span>50m</span>
              <span>50000m</span>
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="crisisType">Type of Crisis:</label>
          <select
            id="crisisType"
            value={crisisType}
            onChange={(e) => setCrisisType(e.target.value)}
            required
          >
            <option value="">Select a type</option>
            <option value="flood">Flood</option>
            <option value="earthquake">Earthquake</option>
            <option value="fire">Fire</option>
            <option value="medical_emergency">Medical Emergency</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Report Crisis</button>
      </form>
    </div>
  );
}

export default CrisisReportForm;