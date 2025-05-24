import React, { useState } from 'react';
import { useMapEvents, Popup } from 'react-leaflet';
import L from 'leaflet';

// Helper function to check if a point is inside a polygon
// This is a basic implementation and might need more robustness for complex polygons (e.g., self-intersections)
const isPointInPolygon = (point, vs) => {
  // ray-casting algorithm based on
  // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

  var x = point[0], y = point[1]; // Leaflet format: [lat, lng]

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0], yi = vs[i][1];
      var xj = vs[j][0], yj = vs[j][1];

      var intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }

  return inside;
};

const MapClickHandler = ({ crises, formatPolygonCoordinates, typeColors }) => {
  const [popupContent, setPopupContent] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);

  useMapEvents({
    click: (e) => {
      const clickedLat = e.latlng.lat;
      const clickedLng = e.latlng.lng;
      const clickedPoint = [clickedLat, clickedLng];

      const intersectingCrises = crises.filter(crisis => {
        const polygonCoordinates = formatPolygonCoordinates(crisis.geometry);
        if (polygonCoordinates.length > 0) {
          // Check if the clicked point is inside the polygon
          // polygonCoordinates are in Leaflet format: [[lat, lng], ...]
          return isPointInPolygon(clickedPoint, polygonCoordinates);
        }
        return false;
      });

      if (intersectingCrises.length > 0) {
        setPopupPosition(e.latlng);
        setPopupContent(
          <div>
            <h3 className="font-bold mb-2">Crises at this location:</h3>
            {intersectingCrises.map(crisis => (
              <div key={crisis.id} className="mb-3 p-2 border rounded" style={{ borderColor: typeColors[crisis.type] || typeColors.default }}>
                <h4 className="font-semibold" style={{ color: typeColors[crisis.type] || typeColors.default }}>{crisis.name}</h4>
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
                   Add Damage
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      } else {
        setPopupContent(null);
        setPopupPosition(null);
      }
    },
  });

  return (
    popupContent && popupPosition ? (
      <Popup position={popupPosition}>
        {popupContent}
      </Popup>
    ) : null
  );
};

export default MapClickHandler;