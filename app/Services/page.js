'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function ServicesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [services, setServices] = useState([]);
  const [damageData, setDamageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const damageId = searchParams.get('damageId');
    const damageDataParam = searchParams.get('damageData');

    if (damageId && damageDataParam) {
      try {
        const parsedDamageData = JSON.parse(damageDataParam);
        setDamageData(parsedDamageData);
        fetchServices(damageId);
      } catch (error) {
        console.error('Error parsing damage data:', error);
        setError('Invalid damage data');
        setLoading(false);
      }
    } else {
      setError('Missing damage information');
      setLoading(false);
    }
  }, [searchParams]);

  const fetchServices = async (damageId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/get-services/${damageId}`);
      const data = await response.json();

      if (data.success) {
        setServices(data.services);
      } else {
        setError(data.message || 'Failed to fetch services');
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setError('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  const formatDamageCategory = (category) => {
    const categoryMap = {
      'collapsed': 'Collapsed Building',
      'flooded-house': 'Flooded House',
      'burned-house': 'Burned House',
      'injuries': 'Injuries',
      'death': 'Death',
      'stuck': 'Stuck People',
      'infrastructure': 'Infrastructure Damage',
      'environmental': 'Environmental Damage',
      'other': 'Other'
    };
    return categoryMap[category] || category;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    if (!amount) return 'Not specified';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'Pending': '#FEF3C7', // Yellow
      'In Progress': '#DBEAFE', // Blue
      'Completed': '#D1FAE5', // Green
      'Cancelled': '#FEE2E2', // Red
      'On Hold': '#F3E8FF' // Purple
    };
    return statusColors[status] || '#F3F4F6'; // Gray default
  };

  const getStatusTextColor = (status) => {
    const statusTextColors = {
      'Pending': '#92400E',
      'In Progress': '#1E40AF',
      'Completed': '#065F46',
      'Cancelled': '#991B1B',
      'On Hold': '#6B21A8'
    };
    return statusTextColors[status] || '#374151';
  };

  const handleAddService = () => {
    const queryParams = new URLSearchParams({
      damageId: damageData.id,
      damageData: JSON.stringify(damageData)
    });
    
    router.push(`/add-service?${queryParams.toString()}`);
  };

  if (loading) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <h1>Loading Services...</h1>
        <p>Please wait while we fetch the services.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <h1>Error</h1>
        <p style={{ color: 'red' }}>{error}</p>
        <button
          onClick={() => router.back()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Services for Damage #{damageData?.id}</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleAddService}
            style={{
              padding: '10px 20px',
              backgroundColor: '#10B981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Add Service
          </button>
          <button
            onClick={() => router.back()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6B7280',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Back
          </button>
        </div>
      </div>

      {/* Damage Information */}
      {damageData && (
        <div style={{ 
          backgroundColor: '#F3F4F6', 
          color: 'black',
          padding: '16px', 
          borderRadius: '8px', 
          marginBottom: '20px' 
        }}>
          <h2 style={{ marginBottom: '12px' }}>Damage Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            <p><strong>Type:</strong> {formatDamageCategory(damageData.category)}</p>
            <p><strong>Location:</strong> {damageData.city}</p>
            {damageData.crisis && damageData.crisis.name && (
              <p><strong>Crisis:</strong> {damageData.crisis.name}</p>
            )}
          </div>
          <p style={{ marginTop: '12px' }}><strong>Description:</strong> {damageData.description}</p>
        </div>
      )}

      {/* Services Count */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          {services.length === 0 ? 'No services found' : `${services.length} service${services.length !== 1 ? 's' : ''} found`}
        </p>
      </div>

      {/* Services List */}
      {services.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px', 
          backgroundColor: '#F9FAFB', 
          borderRadius: '8px',
          color: 'black'
        }}>
          <h3>No Services Yet</h3>
          <p style={{ marginBottom: '20px' }}>Be the first to add a service for this damage.</p>
          <button
            onClick={handleAddService}
            style={{
              padding: '12px 24px',
              backgroundColor: '#10B981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Add First Service
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Service Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '16px',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    color: '#1F2937',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    {service.category}
                  </h3>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        backgroundColor: getStatusColor(service.status),
                        color: getStatusTextColor(service.status)
                      }}
                    >
                      {service.status}
                    </span>
                    <span style={{ fontSize: '14px', color: '#6B7280' }}>
                      Service ID: #{service.id}
                    </span>
                  </div>
                </div>
                {service.costEstimate && (
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#059669' 
                    }}>
                      {formatCurrency(service.costEstimate)}
                    </p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#6B7280' }}>
                      Cost Estimate
                    </p>
                  </div>
                )}
              </div>

              {/* Service Description */}
              <div style={{ marginBottom: '16px' }}>
                <p style={{ 
                  margin: 0, 
                  lineHeight: '1.6', 
                  color: '#374151',
                  fontSize: '14px'
                }}>
                  {service.description}
                </p>
              </div>

              {/* Service Details Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '12px',
                backgroundColor: '#F9FAFB',
                padding: '12px',
                borderRadius: '6px',
                fontSize: '14px',
                color: '#374151'
              }}>
                {service.estimatedDuration && (
                  <p style={{ margin: 0 }}>
                    <strong>Duration:</strong> {service.estimatedDuration}
                  </p>
                )}
                <p style={{ margin: 0 }}>
                  <strong>Valid From:</strong> {formatDate(service.validityStart)}
                </p>
                {service.validityEnd && (
                  <p style={{ margin: 0 }}>
                    <strong>Valid Until:</strong> {formatDate(service.validityEnd)}
                  </p>
                )}
                {service.completionDate && (
                  <p style={{ margin: 0 }}>
                    <strong>Expected Completion:</strong> {formatDate(service.completionDate)}
                  </p>
                )}
              </div>

              {/* Crisis Information */}
              {service.damage?.crisis && (
                <div style={{ 
                  marginTop: '12px',
                  padding: '8px',
                  backgroundColor: '#EFF6FF',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#1E40AF'
                }}>
                  <strong>Related Crisis:</strong> {service.damage.crisis.name} 
                  {service.damage.crisis.country && ` (${service.damage.crisis.country})`}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServicesPage;