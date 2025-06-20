'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '/lib/firebase';

// Fallback component for loading state
function AddServiceFormFallback() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f4f6',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: '#6b7280', fontSize: '16px' }}>Loading service form...</p>
        </div>
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

// Main form content component
function AddServiceFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [damageData, setDamageData] = useState(null);
  const [categoryS, setCategoryS] = useState('');
  const [descriptionS, setDescriptionS] = useState('');
  const [statusS, setStatusS] = useState('Pending');
  const [costEstimateS, setCostEstimateS] = useState('');
  const [completionDateS, setCompletionDateS] = useState('');
  const [validityStartS, setValidityStartS] = useState(new Date().toISOString().split('T')[0]);
  const [validityEndS, setValidityEndS] = useState('');
  const [estimatedDurationS, setEstimatedDurationS] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  // Service categories
  const serviceCategories = [
    'Emergency Response',
    'Medical Aid',
    'Food Distribution',
    'Shelter Assistance',
    'Infrastructure Repair',
    'Cleanup Services',
    'Transportation',
    'Communication Support',
    'Psychological Support',
    'Legal Aid',
    'Other'
  ];

  // Service statuses
  const serviceStatuses = [
    'Pending',
    'In Progress',
    'Completed',
    'Cancelled',
    'On Hold'
  ];

  // Estimated duration options
  const durationOptions = [
    '1-2 hours',
    '3-6 hours',
    '1 day',
    '2-3 days',
    '1 week',
    '2 weeks',
    '1 month',
    '2-3 months',
    '6 months',
    '1 year',
    'Ongoing'
  ];

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Load damage data from URL parameters
  useEffect(() => {
    const damageId = searchParams.get('damageId');
    const damageDataParam = searchParams.get('damageData');

    if (damageId && damageDataParam) {
      try {
        const parsedDamageData = JSON.parse(damageDataParam);
        setDamageData(parsedDamageData);
      } catch (error) {
        console.error('Error parsing damage data:', error);
      }
    }
  }, [searchParams]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!categoryS) {
      alert('Please select a service category');
      return;
    }

    if (!descriptionS.trim()) {
      alert('Please provide a service description');
      return;
    }

    if (descriptionS.length > 1000) {
      alert('Service description cannot exceed 1000 characters');
      return;
    }

    const damageId = searchParams.get('damageId');
    if (!damageId) {
      alert('Error: Damage ID not found');
      return;
    }

    // Validate cost estimate if provided
    if (costEstimateS && (isNaN(parseFloat(costEstimateS)) || parseFloat(costEstimateS) < 0)) {
      alert('Please enter a valid cost estimate');
      return;
    }

    // Validate dates
    if (validityEndS && validityStartS && new Date(validityEndS) <= new Date(validityStartS)) {
      alert('Validity end date must be after start date');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare service data
      const serviceData = {
        categoryS,
        descriptionS: descriptionS.trim(),
        statusS,
        costEstimateS: costEstimateS ? parseFloat(costEstimateS) : null,
        completionDateS: completionDateS || null,
        validityStartS,
        validityEndS: validityEndS || null,
        estimatedDurationS: estimatedDurationS || null,
        damageId: parseInt(damageId),
      };

      // Submit service
      const response = await fetch('/api/add-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit service');
      }

      alert('Service submitted successfully!');

      // Reset form
      setCategoryS('');
      setDescriptionS('');
      setStatusS('Pending');
      setCostEstimateS('');
      setCompletionDateS('');
      setValidityStartS(new Date().toISOString().split('T')[0]);
      setValidityEndS('');
      setEstimatedDurationS('');

      // Navigate back
      router.push('/');

    } catch (error) {
      console.error('Error submitting service:', error);
      alert(`Error submitting service: ${error.message}`);
    } finally {
      setIsSubmitting(false);
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

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Add Service</h1>

      <div style={{
        backgroundColor: '#E0F2FE',
        padding: '12px',
        color: 'black',
        borderRadius: '6px',
        marginBottom: '20px',
        fontSize: '14px'
      }}>

      </div>

      {damageData && (
        <div style={{
          backgroundColor: '#F3F4F6',
          color: 'black',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2 style={{ marginBottom: '12px' }}>Damage Information</h2>
          <p><strong>Damage ID:</strong> #{damageData.id}</p>
          <p><strong>Type:</strong> {formatDamageCategory(damageData.category)}</p>
          <p><strong>Location:</strong> {damageData.city}</p>
          {damageData.crisis && damageData.crisis.name && (
            <p><strong>Crisis:</strong> {damageData.crisis.name}</p>
          )}
          <p><strong>Description:</strong> {damageData.description}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div>
          <label htmlFor="categoryS" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Service Category: *
          </label>
          <select
            id="categoryS"
            value={categoryS}
            onChange={(e) => setCategoryS(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            <option value="">Select a category</option>
            {serviceCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="descriptionS" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Service Description: * ({descriptionS.length}/1000 characters)
          </label>
          <textarea
            id="descriptionS"
            value={descriptionS}
            onChange={(e) => setDescriptionS(e.target.value)}
            required
            maxLength={1000}
            rows="6"
            placeholder="Please describe the service you're offering or requesting:
- What type of service is needed/offered
- Specific details about the work
- Resources required
- Target beneficiaries
- Expected outcomes
- Any special requirements or considerations"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              fontSize: '14px',
              resize: 'vertical'
            }}
          />
        </div>

        <div>
          <label htmlFor="statusS" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Service Status: *
          </label>
          <select
            id="statusS"
            value={statusS}
            onChange={(e) => setStatusS(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            {serviceStatuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="estimatedDurationS" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Estimated Duration (Optional):
          </label>
          <select
            id="estimatedDurationS"
            value={estimatedDurationS}
            onChange={(e) => setEstimatedDurationS(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            <option value="">Select duration</option>
            {durationOptions.map((duration) => (
              <option key={duration} value={duration}>{duration}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label htmlFor="validityStartS" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Validity Start Date: *
            </label>
            <input
              type="date"
              id="validityStartS"
              value={validityStartS}
              onChange={(e) => setValidityStartS(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label htmlFor="validityEndS" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Validity End Date (Optional):
            </label>
            <input
              type="date"
              id="validityEndS"
              value={validityEndS}
              onChange={(e) => setValidityEndS(e.target.value)}
              min={validityStartS}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="completionDateS" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Expected Completion Date (Optional):
          </label>
          <input
            type="date"
            id="completionDateS"
            value={completionDateS}
            onChange={(e) => setCompletionDateS(e.target.value)}
            min={validityStartS}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => router.back()}
            disabled={isSubmitting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6B7280',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.6 : 1
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '10px 20px',
              backgroundColor: isSubmitting ? '#9CA3AF' : '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Service'}
          </button>
        </div>
      </form>
    </div>
  );
}

// Main component with Suspense wrapper
function AddServiceForm() {
  return (
    <Suspense fallback={<AddServiceFormFallback />}>
      <AddServiceFormContent />
    </Suspense>
  );
}

export default AddServiceForm;