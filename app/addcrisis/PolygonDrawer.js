import 'leaflet-draw'; // Import after Leaflet
import 'leaflet-draw/dist/leaflet.draw.css';
import { useEffect, useRef } from 'react';
import { FeatureGroup, useMap } from 'react-leaflet';
import L from 'leaflet';

function PolygonDrawer({ onPolygonDrawn }) {
  const map = useMap();
  const drawnItemsRef = useRef(new L.FeatureGroup());

  useEffect(() => {
    map.addLayer(drawnItemsRef.current);

    const drawControl = new L.Control.Draw({
      draw: {
        marker: false,
        circle: false,
        circlemarker: false,
        polyline: false,
        rectangle: false,
        polygon: {
          allowIntersection: false,
          showArea: true,
          drawError: {
            color: '#e1e100',
            message: '<strong>Error:</strong> You can’t draw that!'
          },
          shapeOptions: {
            color: '#97009c'
          }
        }
      },
      edit: {
        featureGroup: drawnItemsRef.current
      }
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function (e) {
      const layer = e.layer;
      drawnItemsRef.current.clearLayers(); // Keep only one
      drawnItemsRef.current.addLayer(layer);

      const latlngs = layer.getLatLngs()[0]; // outer ring of polygon
      const coordinates = latlngs.map((latlng) => [latlng.lat, latlng.lng]);
      coordinates.push(coordinates[0]); // close polygon

      // Convert to WKT for PostGIS
      const wkt = `POLYGON((${coordinates.map(([lat, lng]) => `${lng} ${lat}`).join(', ')}))`;

      onPolygonDrawn(wkt);
    });

    return () => {
      map.removeControl(drawControl);
    };
  }, [map, onPolygonDrawn]);

  return <FeatureGroup ref={drawnItemsRef} />;
}

export default PolygonDrawer;
