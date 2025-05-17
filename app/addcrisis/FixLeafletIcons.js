
'use client'

import { useEffect } from 'react';
import L from 'leaflet';

// Fix Leaflet's default icon issue
const FixLeafletIcons = () => {
  useEffect(() => {
    // Only run on client side
    delete L.Icon.Default.prototype._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
    });
  }, []);

  return null;
};

export default FixLeafletIcons;