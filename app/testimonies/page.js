// pages/testimonies.js or app/testimonies/page.js

'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

// Fallback component for loading state
const TestimoniesPageFallback = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#F9FAFB'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3B82F6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 20px'
        }}></div>
        <p style={{ color: '#6B7280' }}>Loading page...</p>
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Main content component that uses useSearchParams
const TestimoniesPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [testimonies, setTestimonies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [damageInfo, setDamageInfo] = useState(null);

  const damageId = searchParams.get('damageId');
  const damageData = searchParams.get('damageData');

  useEffect(() => {
    if (damageData) {
      try {
        setDamageInfo(JSON.parse(damageData));
      } catch (e) {
        console.error('Error parsing damage data:', e);
      }
    }
  }, [damageData]);

  useEffect(() => {
    if (damageId) {
      fetchTestimonies();
    }
  }, [damageId]);

  const fetchTestimonies = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/get-testimonies/${damageId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch testimonies');
      }

      const data = await response.json();

      if (data.success) {
        setTestimonies(data.testimonies);
      } else {
        throw new Error(data.message || 'Failed to fetch testimonies');
      }
    } catch (error) {
      console.error('Error fetching testimonies:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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

  const formatVolunteerType = (type) => {
    const typeMap = {
      'citizen': 'Citizen Volunteer',
      'ngo': 'NGO Representative',
      'emergency': 'Emergency Responder',
      'medical': 'Medical Professional',
      'other': 'Other'
    };
    return typeMap[type] || type || 'Volunteer';
  };

  const getReputationBadge = (score) => {
    const numScore = parseFloat(score);
    if (numScore >= 9) return { text: 'Excellent', color: '#10B981', bgColor: '#D1FAE5' };
    if (numScore >= 7) return { text: 'Very Good', color: '#059669', bgColor: '#ECFDF5' };
    if (numScore >= 5) return { text: 'Good', color: '#F59E0B', bgColor: '#FEF3C7' };
    if (numScore >= 3) return { text: 'Fair', color: '#EF4444', bgColor: '#FEE2E2' };
    return { text: 'New', color: '#6B7280', bgColor: '#F3F4F6' };
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3B82F6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p>Loading testimonies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#FEE2E2',
          borderRadius: '8px',
          border: '1px solid #FECACA'
        }}>
          <h2 style={{ color: '#DC2626', marginBottom: '16px' }}>Error Loading Testimonies</h2>
          <p style={{ color: '#7F1D1D', marginBottom: '20px' }}>{error}</p>
          <button
            onClick={() => router.back()}
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      {/* Add keyframes for spinner animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1F2937',
              margin: 0
            }}>
              Damage Testimonies
            </h1>
            <button
              onClick={() => router.back()}
              style={{
                backgroundColor: '#6B7280',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ← Back to Map
            </button>
          </div>

          {/* Damage Information */}
          {damageInfo && (
            <div style={{
              backgroundColor: '#FEF3C7',
              padding: '16px',
              borderRadius: '6px',
              border: '1px solid #F59E0B'
            }}>
              <h3 style={{ color: '#92400E', margin: '0 0 8px 0' }}>
                Damage Report #{damageInfo.id}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <p style={{ margin: 0, color: '#78350F' }}>
                  <strong>Type:</strong> {formatDamageCategory(damageInfo.category)}
                </p>
                <p style={{ margin: 0, color: '#78350F' }}>
                  <strong>City:</strong> {damageInfo.city}
                </p>
                {damageInfo.crisis?.name && (
                  <p style={{ margin: 0, color: '#78350F' }}>
                    <strong>Crisis:</strong> {damageInfo.crisis.name}
                  </p>
                )}
              </div>
            </div>
          )}

          <p style={{
            color: '#6B7280',
            margin: '16px 0 0 0',
            fontSize: '16px'
          }}>
            {testimonies.length} {testimonies.length === 1 ? 'testimony' : 'testimonies'} found
          </p>
        </div>

        {/* Testimonies List */}
        {testimonies.length === 0 ? (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📝</div>
            <h3 style={{ color: '#6B7280', marginBottom: '8px' }}>No Testimonies Yet</h3>
            <p style={{ color: '#9CA3AF' }}>Be the first to add a testimony for this damage report.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '24px' }}>
            {testimonies.map((testimony) => {
              const reputationBadge = getReputationBadge(testimony.volunteer.reputationScore);

              return (
                <div key={testimony.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: '1px solid #E5E7EB'
                }}>
                  {/* Volunteer Information */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                    gap: '16px'
                  }}>
                    <div>
                      <h3 style={{
                        color: '#1F2937',
                        margin: '0 0 8px 0',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>
                        {testimony.volunteer.name || 'Anonymous Volunteer'}
                      </h3>
                      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        {testimony.volunteer.email && (
                          <p style={{ margin: 0, color: '#6B7280', fontSize: '14px' }}>
                            📧 {testimony.volunteer.email}
                          </p>
                        )}
                        {testimony.volunteer.phone && (
                          <p style={{ margin: 0, color: '#6B7280', fontSize: '14px' }}>
                            📞 {testimony.volunteer.phone}
                          </p>
                        )}
                      </div>
                      <p style={{ margin: '4px 0 0 0', color: '#9CA3AF', fontSize: '12px' }}>
                        {formatVolunteerType(testimony.volunteer.type)} • ID: {testimony.volunteer.id}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{
                        backgroundColor: reputationBadge.bgColor,
                        color: reputationBadge.color,
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {reputationBadge.text}
                      </span>
                      <span style={{
                        color: '#6B7280',
                        fontSize: '12px'
                      }}>
                        {formatDate(testimony.date)}
                      </span>
                    </div>
                  </div>

                  {/* Testimony Content */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{
                      color: '#374151',
                      margin: '0 0 12px 0',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}>
                      Testimony:
                    </h4>
                    <div style={{
                      backgroundColor: '#F9FAFB',
                      padding: '16px',
                      borderRadius: '8px',
                      border: '1px solid #E5E7EB'
                    }}>
                      <p style={{
                        margin: 0,
                        color: '#374151',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap'
                      }}>
                        {testimony.content}
                      </p>
                    </div>
                  </div>

                  {/* Media */}
                  {testimony.mediaURL && (
                    <div style={{ marginBottom: '12px' }}>
                      <h4 style={{
                        color: '#374151',
                        margin: '0 0 12px 0',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}>
                        Attached Media:
                      </h4>
                      <div style={{
                        border: '2px dashed #D1D5DB',
                        borderRadius: '8px',
                        padding: '16px',
                        textAlign: 'center'
                      }}>
                        {testimony.mediaURL.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                          <img
                            src={testimony.mediaURL}
                            alt="Testimony media"
                            style={{
                              maxWidth: '100%',
                              maxHeight: '400px',
                              borderRadius: '6px',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                          />
                        ) : (
                          <div>
                            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📎</div>
                            <a
                              href={testimony.mediaURL}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: '#3B82F6',
                                textDecoration: 'none',
                                fontWeight: '500'
                              }}
                            >
                              View Media File
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Testimony ID */}
                  <div style={{
                    borderTop: '1px solid #E5E7EB',
                    paddingTop: '12px',
                    textAlign: 'right'
                  }}>
                    <span style={{
                      color: '#9CA3AF',
                      fontSize: '12px'
                    }}>
                      Testimony ID: #{testimony.id}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// Main component with Suspense wrapper
function TestimoniesPage() {
  return (
    <Suspense fallback={<TestimoniesPageFallback />}>
      <TestimoniesPageContent />
    </Suspense>
  );
}

export default TestimoniesPage;