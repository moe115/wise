'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const typeColors = {
    'Natural_Disaster': '#e74c3c',
    'flood': '#3498db',
    'earthquake': '#f39c12',
    'Hurricane': '#9b59b6',
    'fire': '#e67e22',
    'medical_emergency': '#c17a6a',
    'default': '#7f8c8d'
};

const MapWithNoSSR = dynamic(() => import('../Map'), {
    ssr: false,
    loading: () => <div className="h-64 w-full flex items-center justify-center bg-gray-100">Loading Map...</div>,
});

const CrisisMap = () => {
    const [mapReady, setMapReady] = useState(false);
    const [crises, setCrises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setMapReady(true);

        // Fetch crisis data from our API endpoint
        const fetchCrises = async () => {
            try {
                const response = await fetch('/api/crisis');
                if (!response.ok) {
                    throw new Error('Failed to fetch crisis data');
                }
                const data = await response.json();
                setCrises(data.crises);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                console.error('Error fetching crises:', err);
            }
        };

        fetchCrises();
    }, []);

    if (error) {
        return <div className="p-4 text-red-500">Error loading crisis data: {error}</div>;
    }

    // Calculate total area and other statistics
    const calculateStats = () => {

        const totalCrises = crises.length;
        const totalFinancialImpact = 0;

        return {
            totalCrises,
            extremeCrises: 0, // You would calculate this from your data
            financialImpact: totalFinancialImpact,
            totalArea: 0 // You would calculate this from your polygon geometries
        };
    };

    const stats = calculateStats();

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 bg-gray-100">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Crisis Map</h2>

                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.keys(typeColors).filter(key => key !== 'default').map(type => (
                        <div key={type} className="flex items-center">
                            <div
                                style={{
                                    backgroundColor: typeColors[type],
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    marginRight: '5px'
                                }}
                            />
                            <span className="text-sm text-gray-700">{type}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-grow">
                {loading ? (
                    <div className="h-64 flex items-center justify-center">
                        <p>Loading crisis data...</p>
                    </div>
                ) : mapReady && (
                    <MapWithNoSSR
                        crises={crises}
                        typeColors={typeColors}
                    />
                )}
            </div>

            <div className="p-4 bg-gray-50">
                <h3 className="font-bold mb-2">Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-3 rounded shadow">
                        <div className="text-sm text-gray-500">Total Crises</div>
                        <div className="text-xl font-bold text-gray-800">{stats.totalCrises}</div>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                        <div className="text-sm text-gray-500">Extreme Crises</div>
                        <div className="text-xl font-bold text-gray-800">{stats.extremeCrises}</div>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                        <div className="text-sm text-gray-500">Est. Financial Impact</div>
                        <div className="text-xl font-bold text-gray-800">
                            ${stats.financialImpact.toLocaleString()}
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                        <div className="text-sm text-gray-500">Total Area (km²)</div>
                        <div className="text-xl font-bold text-gray-800">
                            {stats.totalArea.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrisisMap;