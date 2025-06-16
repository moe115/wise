'use client';

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '/lib/firebase';

function VolunteerServicesDashboard() {
  const [userEmail, setUserEmail] = useState(null);
  const [volunteerId, setVolunteerId] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState({});

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
        setServices([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch volunteer services when email is available
  useEffect(() => {
    const fetchVolunteerServices = async () => {
      if (!userEmail) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/volunteer-services?email=${encodeURIComponent(userEmail)}`);
        const data = await response.json();

        if (response.ok) {
          setVolunteerId(data.volunteerId);
          setServices(data.services);
        } else {
          setError(data.error || 'Failed to fetch services');
        }
      } catch (err) {
        console.error('Error fetching volunteer services:', err);
        setError('Error connecting to server. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteerServices();
  }, [userEmail]);

  const formatCurrency = (amount) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  const updateServiceStatus = async (serviceId, newStatus) => {
    if (!volunteerId) {
      setError('Volunteer ID not available');
      return;
    }

    setUpdatingStatus(prev => ({ ...prev, [serviceId]: true }));

    try {
      const response = await fetch('/api/update-service-status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceId: parseInt(serviceId),
          status: newStatus,
          volunteerId: parseInt(volunteerId)
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Update the services state with the new status
        setServices(prevServices => 
          prevServices.map(service => 
            service.serviceId === serviceId 
              ? { ...service, service: { ...service.service, status: newStatus, completionDate: data.data.service.completionDate } }
              : service
          )
        );
        
        // Show success message (you can replace this with a toast notification)
        alert('Service status updated successfully!');
      } else {
        setError(data.error || 'Failed to update service status');
        alert('Error: ' + (data.error || 'Failed to update service status'));
      }
    } catch (err) {
      console.error('Error updating service status:', err);
      setError('Error connecting to server. Please try again.');
      alert('Error connecting to server. Please try again.');
    } finally {
      setUpdatingStatus(prev => ({ ...prev, [serviceId]: false }));
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'on hold':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailableStatusOptions = (currentStatus) => {
    const allStatuses = [
      { value: 'pending', label: 'Pending' },
      { value: 'in progress', label: 'In Progress' },
      { value: 'completed', label: 'Completed' },
      { value: 'on hold', label: 'On Hold' },
      { value: 'cancelled', label: 'Cancelled' }
    ];
    
    // Filter out the current status from options
    return allStatuses.filter(status => 
      status.value.toLowerCase() !== currentStatus?.toLowerCase()
    );
  };

  if (!userEmail) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-yellow-800">Authentication Required</h2>
          <p className="text-yellow-700">Please log in to view your enrolled services.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-red-800">Error</h2>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Enrolled Services</h1>
        <p className="text-gray-600 mt-2">
          Volunteer ID: {volunteerId} | Total Services: {services.length}
        </p>
      </div>

      {services.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-700">No Services Enrolled</h2>
          <p className="text-gray-600 mt-2">You are not currently enrolled in any services.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {services.map((item, index) => (
            <div key={item.serviceId} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              {/* Service Header */}
              <div className="bg-blue-50 px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.service.category || 'Service Category'}
                    </h3>
                    <p className="text-sm text-gray-600">Service ID: {item.service.id}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.service.status)}`}>
                      {item.service.status || 'Unknown'}
                    </span>
                    
                    {/* Status Update Dropdown */}
                    <div className="relative">
                      <select
                        value=""
                        onChange={(e) => updateServiceStatus(item.serviceId, e.target.value)}
                        disabled={updatingStatus[item.serviceId]}
                        className="text-sm border border-gray-300 rounded-md px-3 py-1 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Change Status</option>
                        {getAvailableStatusOptions(item.service.status).map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {updatingStatus[item.serviceId] && (
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="px-6 py-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service Information */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-3">Service Details</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Description:</span>
                        <p className="text-gray-600 mt-1">{item.service.description || 'No description available'}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>
                          <span className="font-medium text-gray-700">Cost Estimate:</span>
                          <p className="text-gray-600">{formatCurrency(item.service.costEstimate)}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Completion Date:</span>
                          <p className="text-gray-600">{formatDate(item.service.completionDate)}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Duration:</span>
                          <p className="text-gray-600">{item.service.estimatedDuration || 'N/A'}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Valid From:</span>
                          <p className="text-gray-600">{formatDate(item.service.validityStart)}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Valid Until:</span>
                          <p className="text-gray-600">{formatDate(item.service.validityEnd)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Damage Information */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-3">Related Damage</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Category:</span>
                        <p className="text-gray-600">{item.damage.category}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Location:</span>
                        <p className="text-gray-600">{item.damage.city || 'Location not specified'}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Description:</span>
                        <p className="text-gray-600 mt-1">{item.damage.description || 'No description available'}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>
                          <span className="font-medium text-gray-700">Start Date:</span>
                          <p className="text-gray-600">{formatDate(item.damage.startDate)}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">End Date:</span>
                          <p className="text-gray-600">{formatDate(item.damage.endDate)}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Financial Impact:</span>
                          <p className="text-gray-600">{formatCurrency(item.damage.financialEstimation)}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Coverage Radius:</span>
                          <p className="text-gray-600">{item.damage.radius ? `${item.damage.radius} units` : 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VolunteerServicesDashboard;