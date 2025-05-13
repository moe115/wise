'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const sampleDamages = [
    {
        damage_id: '1',
        category: 'Building Collapse',
        coordinates: [40.7484, -73.9857], // NYC
        radius: 2000,
        severity: 'High',
        location_name: 'New York City Center',
        financial_estimate: 25000000,
        quantity: '15 buildings'
    },
    {
        damage_id: '2',
        category: 'Flooding',
        coordinates: [40.7284, -73.9957], // Lower NYC
        radius: 3000,
        severity: 'Medium',
        location_name: 'Lower Manhattan',
        financial_estimate: 18000000,
        quantity: '250 acres'
    }
];

const severityColors = {
    'Low': '#2ecc71',
    'Medium': '#f39c12',
    'High': '#e67e22',
    'Extreme': '#e74c3c'
};

const MapWithNoSSR = dynamic(() => import('../Map'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full flex items-center justify-center bg-gray-100">Loading Map...</div>,
});

const CrisisMap = () => {
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        setMapReady(true);
    }, []);

    // Icons for different damage categories (defined here to avoid SSR issues)
    const categoryColors = {
        'Building Collapse': '#e74c3c',
        'Flooding': '#3498db',
        'Road Damage': '#f39c12',
        'Power Outage': '#9b59b6',
        'Forest Destruction': '#2ecc71',
        'default': '#7f8c8d'
    };

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 bg-gray-100">
                <h2 className="text-xl font-bold mb-4 text-gray-500">Crisis Damage Map</h2>

                <div className="flex flex-wrap gap-2 mb-4 text-gray-500">
                    {Object.keys(categoryColors).filter(key => key !== 'default').map(category => (
                        <div key={category} className="flex items-center">
                            <div
                                style={{
                                    backgroundColor: categoryColors[category],
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    marginRight: '5px'
                                }}
                            />
                            <span className="text-sm">{category}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-grow">
                {mapReady && (
                    <MapWithNoSSR
                        damages={sampleDamages}
                        severityColors={severityColors}
                        categoryColors={categoryColors}
                    />
                )}
            </div>

            <div className="p-4 bg-black-100">
                <h3 className="font-bold mb-2">Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-3 rounded shadow">
                        <div className="text-sm text-gray-500">Total Damages</div>
                        <div className="text-xl font-bold text-gray-500">{sampleDamages.length}</div>
                    </div>
                    <div className="bg-white p-3 rounded shadow text-gray-500">
                        <div className="text-sm text-gray-500">extreme Crisis</div>
                        <div className="text-xl font-bold">
                            {sampleDamages.filter(d => d.severity === 'Extreme').length}
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                        <div className="text-sm text-gray-500">Est. Financial Impact</div>
                        <div className="text-xl font-bold text-gray-500">
                            ${sampleDamages.reduce((sum, d) => sum + (parseFloat(d.financial_estimate) || 0), 0).toLocaleString()}
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                        <div className="text-sm text-gray-500">Total Area (km²)</div>
                        <div className="text-xl font-bold text-gray-500">
                            {(sampleDamages.reduce((sum, d) => sum + Math.PI * Math.pow(d.radius / 1000, 2), 0)).toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrisisMap;