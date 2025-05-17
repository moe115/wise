'use client'

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

// Dynamically import map components with ssr: false
const MapWithNoSSR = dynamic(
  () => import('./MapComponent'),
  { ssr: false }
);

function CrisisReportForm() {
  const [polygonWKT, setPolygonWKT] = useState(null);
  const [position, setPosition] = useState(null);
  const [name, setName] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [crisisType, setCrisisType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handlePolygonDrawn = (wkt) => {
    setPolygonWKT(wkt);
    console.log('Drawn Polygon (WKT):', wkt);
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
    setCountry(result.display_name.split(',')[0]); // Set country to first part of display name
    setSearchResults([]); // Clear search results
    setSearchQuery(''); // Clear search query
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/add-crisis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Crisisname: name,
        areaWKT: polygonWKT,
        CrisisDesc: description,
        CrisisStart: new Date(dateStart),
        CrisisEnd: null,
        CrisisCountry: country,
        TypeC: crisisType
      })
    });

    if (res.ok) {
      alert('Crisis reported successfully!');
    } else {
      const error = await res.json();
      alert('Failed: ' + error.error);
    }
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
          <label htmlFor="country">country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="dateStart">start date:</label>
          <input
            type="date"
            id="dateStart"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
            required
          />
        </div>
        
        <div className={styles.mapContainer}>
          <MapWithNoSSR 
            position={position} 
            onPolygonDrawn={handlePolygonDrawn} 
          />
          <p>Click on the map to draw the crisis location or use the search above.</p>
          {position && <p>Selected Coordinates: Latitude: {position.lat.toFixed(6)}, Longitude: {position.lng.toFixed(6)}</p>}
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
                        <option value="medical_emergency">Natural Disaster</option>

            <option value="medical_emergency">Hurricane</option>

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