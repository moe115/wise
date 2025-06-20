
'use client';

import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, Star, Calendar, Award, FileText, Briefcase, Clock, MapPin, AlertCircle, Search, Filter } from 'lucide-react';

const AllVolunteersProfile = () => {
  const [volunteersData, setVolunteersData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const fetchAllVolunteers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/volunteer-profile');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setVolunteersData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllVolunteers();
  }, []);

  const getStatusColor = (status) => {
    const statusColors = {
      'completed': 'bg-green-100 text-green-800',
      'in progress': 'bg-blue-100 text-blue-800',
      'pending': 'bg-yellow-100 text-yellow-800',
      'on hold': 'bg-orange-100 text-orange-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    return statusColors[status?.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatReputationScore = (score) => {
    return parseFloat(score).toFixed(1);
  };

  // Filter volunteers based on search term and type
  const filteredVolunteers = volunteersData?.volunteers?.filter(volunteer => {
    const matchesSearch = volunteer.profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         volunteer.profile.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         volunteer.profile.phone?.includes(searchTerm);
    
    const matchesType = filterType === 'all' || volunteer.profile.type.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesType;
  }) || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading all volunteers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Volunteers</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!volunteersData || !volunteersData.volunteers || volunteersData.volunteers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No Volunteers Found</h2>
          <p className="text-gray-600">There are no volunteers in the database yet.</p>
        </div>
      </div>
    );
  }

  const { overallStatistics } = volunteersData;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Volunteer Management</h1>
              <p className="text-gray-600 mt-1">Manage and view all registered volunteers</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search volunteers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                {Object.keys(overallStatistics.volunteersByType).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Overall Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600">{overallStatistics.totalVolunteers}</div>
              <div className="text-sm text-gray-600">Total Volunteers</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600">{overallStatistics.totalServices}</div>
              <div className="text-sm text-gray-600">Total Services</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-yellow-600">{overallStatistics.totalTestimonies}</div>
              <div className="text-sm text-gray-600">Total Testimonies</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600">{formatReputationScore(overallStatistics.averageReputationScore)}</div>
              <div className="text-sm text-gray-600">Avg. Score</div>
            </div>
          </div>
        </div>

        {/* Volunteers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVolunteers.map((volunteer) => (
            <div key={volunteer.volunteerId} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              {/* Volunteer Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{volunteer.profile.name}</h3>
                    <p className="text-sm text-gray-600">{volunteer.profile.type} Volunteer</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-gray-700">
                    {formatReputationScore(volunteer.profile.reputationScore)}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="truncate">{volunteer.profile.email || 'Not provided'}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{volunteer.profile.phone || 'Not provided'}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Joined {volunteer.profile.createdAt ? formatDate(volunteer.profile.createdAt) : 'Unknown'}</span>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-blue-50 rounded">
                  <div className="text-lg font-semibold text-blue-600">{volunteer.statistics.totalServices}</div>
                  <div className="text-xs text-gray-600">Services</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <div className="text-lg font-semibold text-green-600">{volunteer.statistics.totalTestimonies}</div>
                  <div className="text-xs text-gray-600">Testimonies</div>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded">
                  <div className="text-lg font-semibold text-orange-600">{volunteer.statistics.activeServicesCount}</div>
                  <div className="text-xs text-gray-600">Active</div>
                </div>
              </div>

              {/* Service Status */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Service Status</h4>
                <div className="flex flex-wrap gap-1">
                  {Object.entries(volunteer.statistics.servicesByStatus).map(([status, count]) => (
                    count > 0 && (
                      <span key={status} className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(status)}`}>
                        {status}: {count}
                      </span>
                    )
                  ))}
                </div>
              </div>

              {/* Recent Testimonies Preview */}
              {volunteer.recentTestimonies && volunteer.recentTestimonies.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Testimony</h4>
                  <div className="bg-gray-50 rounded p-2">
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {volunteer.recentTestimonies[0].content}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500">
                        {volunteer.recentTestimonies[0].damage.city}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(volunteer.recentTestimonies[0].date)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Availability Status */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  volunteer.profile.availability === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {volunteer.profile.availability || 'Status Unknown'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredVolunteers.length === 0 && (searchTerm || filterType !== 'all') && (
          <div className="text-center py-12">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No volunteers found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllVolunteersProfile;