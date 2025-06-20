'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '/lib/firebase'; // Keep auth from Firebase

// Fallback component for loading state
function AddTestimonyFormFallback() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h1>Loading...</h1>
      <p>Preparing testimony form...</p>
    </div>
  );
}

// Main form content component
function AddTestimonyFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [damageData, setDamageData] = useState(null);
  const [contentT, setContentT] = useState('');
  const [dateT, setDateT] = useState(new Date().toISOString().split('T')[0]);
  const [timeT, setTimeT] = useState(new Date().toTimeString().split(' ')[0].substring(0, 5));
  const [mediaFiles, setMediaFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [volunteerId, setVolunteerId] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

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

  // Fetch volunteer ID when email is available
  useEffect(() => {
    const fetchVolunteerId = async () => {
      if (!userEmail) return;

      try {
        const response = await fetch(`/api/get-volunteer?email=${encodeURIComponent(userEmail)}`);
        const data = await response.json();

        if (response.ok) {
          setVolunteerId(data.volunteerId);
        } else {
          console.error('Error fetching volunteer:', data.error);
          alert('Error: Could not find volunteer profile. Please ensure you are registered as a volunteer.');
        }
      } catch (error) {
        console.error('Error fetching volunteer:', error);
        alert('Error connecting to server. Please try again.');
      }
    };

    fetchVolunteerId();
  }, [userEmail]);

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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaFiles(files);
  };

  const uploadFilesToCloudinary = async (files) => {
    if (!files || files.length === 0) return null;

    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET); // You'll need to set this
        formData.append('folder', 'testimonies'); // Optional: organize files in folders

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error('Failed to upload file to Cloudinary');
        }

        const data = await response.json();
        return data.secure_url;
      });

      const urls = await Promise.all(uploadPromises);
      return urls.join(','); // Join multiple URLs with comma
    } catch (error) {
      console.error('Error uploading files to Cloudinary:', error);
      throw new Error('Failed to upload media files');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!contentT.trim()) {
      alert('Please provide your testimony');
      return;
    }

    if (contentT.length > 1000) {
      alert('Testimony content cannot exceed 1000 characters');
      return;
    }

    if (!volunteerId) {
      alert('Error: Volunteer ID not found. Please ensure you are logged in and registered as a volunteer.');
      return;
    }

    const damageId = searchParams.get('damageId');
    if (!damageId) {
      alert('Error: Damage ID not found');
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      let mediaURL = null;

      // Upload media files if any
      if (mediaFiles.length > 0) {
        setUploadProgress(25);
        mediaURL = await uploadFilesToCloudinary(mediaFiles);
        setUploadProgress(50);
      }

      // Prepare testimony data
      const testimonyData = {
        contentT: contentT.trim(),
        // dateT,
        // timeT,
        mediaURL,
        damageId: parseInt(damageId),
        volunteerId
      };

      setUploadProgress(75);

      // Submit testimony
      const response = await fetch('/api/add-testimony', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testimonyData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit testimony');
      }

      setUploadProgress(100);
      alert('Testimony submitted successfully!');

      // Reset form
      setContentT('');
      setDateT(new Date().toISOString().split('T')[0]);
      setTimeT(new Date().toTimeString().split(' ')[0].substring(0, 5));
      setMediaFiles([]);

      // Clear file input
      const fileInput = document.getElementById('mediaFiles');
      if (fileInput) fileInput.value = '';

      // Navigate back
      router.push('/');

    } catch (error) {
      console.error('Error submitting testimony:', error);
      alert(`Error submitting testimony: ${error.message}`);
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
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

  if (!userEmail) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <h1>Please log in to add testimony</h1>
        <p>You need to be logged in as a volunteer to submit testimony.</p>
      </div>
    );
  }

  if (userEmail && !volunteerId) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <h1>Loading...</h1>
        <p>Fetching your volunteer profile...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Add Testimony</h1>

      <div style={{
        backgroundColor: '#E0F2FE',
        padding: '12px', color: 'black',
        borderRadius: '6px',
        marginBottom: '20px',
        fontSize: '14px'
      }}>
        <p><strong>Logged in as:</strong> {userEmail}</p>
        <p><strong>Volunteer ID:</strong> {volunteerId}</p>
      </div>

      {damageData && (
        <div style={{
          backgroundColor: '#F3F4F6', color: 'black',
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
          <label htmlFor="contentT" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Your Testimony: * ({contentT.length}/1000 characters)
          </label>
          <textarea
            id="contentT"
            value={contentT}
            onChange={(e) => setContentT(e.target.value)}
            required
            maxLength={1000}
            rows="8"
            placeholder="Please describe what you witnessed, experienced, or know about this damage. Include details such as:
- What happened and when
- What you saw or experienced
- Impact on people or property
- Any rescue or recovery efforts
- Current conditions
- Any other relevant information"
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
          <label htmlFor="mediaFiles" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Upload Media Files (Optional):
          </label>
          <input
            type="file"
            id="mediaFiles"
            multiple
            accept="image/*,video/*"
            onChange={handleFileChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
          {mediaFiles.length > 0 && (
            <div style={{ marginTop: '8px' }}>
              <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>
                {mediaFiles.length} file(s) selected:
              </p>
              <ul style={{ fontSize: '12px', color: '#6B7280', paddingLeft: '16px' }}>
                {mediaFiles.map((file, index) => (
                  <li key={index}>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {isSubmitting && uploadProgress > 0 && (
          <div style={{
            backgroundColor: '#F0F9FF',
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #0EA5E9'
          }}>
            <p style={{ margin: 0, fontSize: '14px' }}>
              {uploadProgress < 50 ? 'Uploading media files...' :
                uploadProgress < 75 ? 'Processing upload...' :
                  uploadProgress < 100 ? 'Submitting testimony...' : 'Complete!'} {uploadProgress}%
            </p>
            <div style={{
              width: '100%',
              height: '4px',
              backgroundColor: '#E5E7EB',
              borderRadius: '2px',
              marginTop: '8px'
            }}>
              <div style={{
                width: `${uploadProgress}%`,
                height: '100%',
                backgroundColor: '#0EA5E9',
                borderRadius: '2px',
                transition: 'width 0.3s ease'
              }}></div>
            </div>
          </div>
        )}

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
            {isSubmitting ? 'Submitting...' : 'Submit Testimony'}
          </button>
        </div>
      </form>
    </div>
  );
}

// Main component with Suspense wrapper
function AddTestimonyForm() {
  return (
    <Suspense fallback={<AddTestimonyFormFallback />}>
      <AddTestimonyFormContent />
    </Suspense>
  );
}

export default AddTestimonyForm;