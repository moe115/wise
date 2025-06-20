'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Circle, useMap, Polygon } from 'react-leaflet';
import { useSearchParams } from 'next/navigation';
import 'leaflet/dist/leaflet.css';
import styles from './page.module.css';
import 'leaflet-draw/dist/leaflet.draw.css';
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

// Fallback component for Suspense
function DamageReportFormFallback() {
  return (
    <div className={styles.container}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: '20px' }}>Loading damage report form...</div>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Main form content component that uses useSearchParams
function DamageReportFormContent() {
  const searchParams = useSearchParams();

  const [position, setPosition] = useState(null);
  const [radius, setRadius] = useState(500);
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [damageType, setDamageType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [crisisData, setCrisisData] = useState(null);
  const [mapBounds, setMapBounds] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [financialEstimation, setFinancialEstimation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const mapRef = useRef(null);

  // Load crisis data from URL parameters
  useEffect(() => {
    const crisisId = searchParams.get('crisisId');
    const crisisDataParam = searchParams.get('crisisData');

    if (crisisId && crisisDataParam) {
      try {
        const parsedCrisisData = JSON.parse(crisisDataParam);
        setCrisisData(parsedCrisisData);

        // Set crisis type if available
        if (parsedCrisisData.type) {
          setDamageType(parsedCrisisData.type);
        }

        // Calculate bounds for the crisis area
        if (parsedCrisisData.geometry && parsedCrisisData.geometry.coordinates) {
          const coordinates = formatPolygonCoordinates(parsedCrisisData.geometry);
          if (coordinates.length > 0) {
            const bounds = L.latLngBounds(coordinates);
            setMapBounds(bounds);

            // Set initial position to center of crisis area
            const center = bounds.getCenter();
            setPosition({ lat: center.lat, lng: center.lng });
          }
        }
      } catch (error) {
        console.error('Error parsing crisis data:', error);
      }
    }
  }, [searchParams]);

  // Format polygon coordinates from GeoJSON to Leaflet format
  const formatPolygonCoordinates = (geometry) => {
    if (!geometry || !geometry.coordinates || !geometry.coordinates[0]) {
      return [];
    }

    // Handle only the exterior ring (first array in coordinates)
    // And flip the coordinates for Leaflet (GeoJSON: [lng, lat] -> Leaflet: [lat, lng])
    return geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
  };

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
    setCity(result.display_name.split(',')[0]);
    setSearchResults([]);
    setSearchQuery('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!position) {
      alert('Please select a location on the map');
      return;
    }

    if (!damageType) {
      alert('Please select a damage type');
      return;
    }

    if (!description.trim()) {
      alert('Please provide a damage description');
      return;
    }

    if (!city.trim()) {
      alert('Please provide a city name');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the damage report data for the API
      const damageData = {
        CategoryD: damageType,
        StartDateD: startDate || null,
        EndDateD: endDate || null,
        FinancialEstimationD: financialEstimation ? parseFloat(financialEstimation) : null,
        CrisisID: searchParams.get('crisisId') ? parseInt(searchParams.get('crisisId')) : null,
        Description: description,
        latitude: position.lat,
        longitude: position.lng,
        Radius: radius,
        City: city
      };

      console.log('Submitting damage data:', damageData);

      const response = await fetch('/api/add-damage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(damageData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || result.error || 'Failed to submit damage report');
      }

      alert('Damage reported successfully!');

      // Reset form
      setPosition(null);
      setRadius(500);
      setDescription('');
      setCity('');
      setDamageType('');
      setFinancialEstimation('');
      setStartDate('');
      setEndDate('');

      console.log('Damage report submitted successfully:', result);

    } catch (error) {
      console.error('Error submitting damage report:', error);
      alert(`Error submitting damage report: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get crisis polygon coordinates for display
  const crisisPolygonCoordinates = crisisData ? formatPolygonCoordinates(crisisData.geometry) : [];

  return (
    <div className={styles.container}>
      <h1>Report Damage for Crisis</h1>

      {crisisData && (
        <div className={styles.crisisInfo}>
          <h2>Crisis Information</h2>
          <p><strong>Name:</strong> {crisisData.name}</p>
          <p><strong>Type:</strong> {crisisData.type}</p>
          <p><strong>Country:</strong> {crisisData.country}</p>
          <p><strong>Crisis ID:</strong> {crisisData.id}</p>
        </div>
      )}

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
          <label htmlFor="city">City: *</label>
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
            center={mapBounds ? mapBounds.getCenter() : [33.8938, 35.5018]}
            zoom={mapBounds ? undefined : 10}
            bounds={mapBounds}
            style={{ height: '400px', width: '100%' }}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler onPositionChange={handleMapClick} />

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
          <p>
            {crisisData ?
              'The dashed area shows the crisis zone. Click on the map to select the damage location.' :
              'Click on the map to select the damage location or use the search above.'
            }
          </p>
          {position && <p>Selected Coordinates: Latitude: {position.lat.toFixed(6)}, Longitude: {position.lng.toFixed(6)}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="radius">Damage Radius: {radius} meters</label>
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
          <label htmlFor="damageType">Type of Damage: *</label>
          <select
            id="damageType"
            value={damageType}
            onChange={(e) => setDamageType(e.target.value)}
            required
          >
            <option value="">Select a type</option>
            <option value="collapsed">Collapsed Building</option>
            <option value="flooded-house">Flooded House</option>
            <option value="burned-house">Burned House</option>
            <option value="injuries">Injuries</option>
            <option value="death">Death</option>
            <option value="stuck">Stuck People</option>
            <option value="infrastructure">Infrastructure Damage</option>
            <option value="environmental">Environmental Damage</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="startDate">Damage Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="endDate">Damage End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="financialEstimation">Financial Estimation (USD):</label>
          <input
            type="number"
            id="financialEstimation"
            value={financialEstimation}
            onChange={(e) => setFinancialEstimation(e.target.value)}
            min="0"
            step="0.01"
            placeholder="Enter estimated cost in USD"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Damage Description: *</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            placeholder="Describe the damage observed in this area..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Report Damage'}
        </button>
      </form>
    </div>
  );
}

// Main component with Suspense wrapper
function DamageReportForm() {
  return (
    <Suspense fallback={<DamageReportFormFallback />}>
      <DamageReportFormContent />
    </Suspense>
  );
}

export default DamageReportForm;