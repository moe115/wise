// app/api/volunteer-profile/route.js

import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request) {
  try {
    // Fetch all volunteers with all related information
    const volunteers = await prisma.volunteer.findMany({
      include: {
        USER: true,
        Citizen: true,
        ngo: true,
        PROVIDES: {
          include: {
            SERVICE: true
          }
        },
        TESTIMONY: {
          include: {
            Damage: {
              include: {
                Crisis: true
              }
            }
          }
        }
      }
    });

    if (!volunteers || volunteers.length === 0) {
      return Response.json({ 
        message: 'No volunteers found',
        volunteers: []
      }, { status: 200 });
    }

    // Process all volunteers
    const processedVolunteers = volunteers.map(volunteer => {
      // Extract volunteer information
      let volunteerName = 'Unknown Volunteer';
      let firstName = '';
      let lastName = '';
      let volunteerType = volunteer.typeV || 'Unknown';
      
      if (volunteer.Citizen) {
        firstName = volunteer.Citizen.firstname || '';
        lastName = volunteer.Citizen.lastname || '';
        volunteerName = `${firstName} ${lastName}`.trim();
      } else if (volunteer.ngo) {
        volunteerName = volunteer.ngo.ngoName || 'NGO Volunteer';
        volunteerType = 'NGO';
      }

      // Count services and testimonies
      const totalServices = volunteer.PROVIDES.length;
      const totalTestimonies = volunteer.TESTIMONY.length;

      // Get services breakdown by status
      const servicesByStatus = {
        pending: 0,
        'in progress': 0,
        completed: 0,
        'on hold': 0,
        cancelled: 0
      };

      // Get services breakdown by category
      const servicesByCategory = {};

      volunteer.PROVIDES.forEach(provide => {
        const service = provide.SERVICE;
        const status = service.StatusS?.toLowerCase();
        const category = service.CategoryS || 'Uncategorized';
        
        if (servicesByStatus.hasOwnProperty(status)) {
          servicesByStatus[status]++;
        }
        
        servicesByCategory[category] = (servicesByCategory[category] || 0) + 1;
      });

      // Get recent testimonies with crisis information
      const recentTestimonies = volunteer.TESTIMONY
        .sort((a, b) => new Date(b.dateT) - new Date(a.dateT))
        .slice(0, 3) // Limit to 3 for overview
        .map(testimony => ({
          id: testimony.testimonyId,
          content: testimony.contentT,
          date: testimony.dateT,
          mediaURL: testimony.mediaURL,
          damage: {
            id: testimony.Damage.DamageID,
            category: testimony.Damage.CategoryD,
            city: testimony.Damage.City,
            crisis: {
              id: testimony.Damage.Crisis?.CrisisId,
              name: testimony.Damage.Crisis?.Crisisname,
              country: testimony.Damage.Crisis?.CrisisCountry
            }
          }
        }));

      // Get active services count
      const activeServicesCount = volunteer.PROVIDES.filter(provide => {
        const status = provide.SERVICE.StatusS?.toLowerCase();
        return status === 'in progress' || status === 'pending';
      }).length;

      return {
        volunteerId: volunteer.volId,
        profile: {
          name: volunteerName,
          firstName,
          lastName,
          email: volunteer.USER?.email,
          phone: volunteer.phone,
          type: volunteerType,
          reputationScore: volunteer.ReputationScore,
          availability: volunteer.AvailabilityV,
          category: volunteer.CategoryV,
          createdAt: volunteer.USER?.createdAt,
          role: volunteer.USER?.role
        },
        statistics: {
          totalServices,
          totalTestimonies,
          servicesByStatus,
          servicesByCategory,
          activeServicesCount
        },
        recentTestimonies
      };
    });

    // Calculate overall statistics
    const overallStats = {
      totalVolunteers: volunteers.length,
      totalServices: processedVolunteers.reduce((sum, v) => sum + v.statistics.totalServices, 0),
      totalTestimonies: processedVolunteers.reduce((sum, v) => sum + v.statistics.totalTestimonies, 0),
      activeVolunteers: processedVolunteers.filter(v => v.statistics.activeServicesCount > 0).length,
      volunteersByType: {},
      averageReputationScore: 0
    };

    // Calculate volunteer types breakdown
    processedVolunteers.forEach(volunteer => {
      const type = volunteer.profile.type;
      overallStats.volunteersByType[type] = (overallStats.volunteersByType[type] || 0) + 1;
    });

    // Calculate average reputation score
    const totalReputationScore = processedVolunteers.reduce((sum, v) => sum + parseFloat(v.profile.reputationScore || 0), 0);
    overallStats.averageReputationScore = volunteers.length > 0 ? (totalReputationScore / volunteers.length) : 0;

    return Response.json({
      overallStatistics: overallStats,
      volunteers: processedVolunteers
    });

  } catch (error) {
    console.error('Error fetching all volunteers:', error);
    return Response.json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}