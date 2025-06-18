// app/api/damage-services-stats/route.js

import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const damageId = searchParams.get('damageId');

    if (!damageId) {
      return Response.json({ error: 'Damage ID is required' }, { status: 400 });
    }

    // Fetch all services for the specific damage with volunteer information
    const services = await prisma.sERVICE.findMany({
      where: {
        DamageID: parseInt(damageId)
      },
      include: {
        PROVIDES: {
          include: {
            Volunteer: {
              include: {
                USER: true,
                Citizen: true,
                ngo: true
              }
            }
          }
        }
      }
    });

    // Calculate statistics
    const totalServices = services.length;
    
    // Count services by status
    const statusCounts = {
      pending: 0,
      'in progress': 0,
      completed: 0,
      'on hold': 0,
      cancelled: 0
    };

    // Get unique volunteers
    const uniqueVolunteers = new Set();
    const volunteerDetails = [];

    services.forEach(service => {
      // Count status
      const status = service.StatusS?.toLowerCase();
      if (statusCounts.hasOwnProperty(status)) {
        statusCounts[status]++;
      }

      // Track unique volunteers
      service.PROVIDES.forEach(provide => {
        const volId = provide.Volunteer.volId;
        if (!uniqueVolunteers.has(volId)) {
          uniqueVolunteers.add(volId);
          
          // Add volunteer details
          let volunteerName = 'Unknown Volunteer';
          let volunteerType = provide.Volunteer.typeV || 'Unknown';
          
          if (provide.Volunteer.Citizen) {
            volunteerName = `${provide.Volunteer.Citizen.firstname || ''} ${provide.Volunteer.Citizen.lastname || ''}`.trim();
          } else if (provide.Volunteer.ngo) {
            volunteerName = provide.Volunteer.ngo.ngoName || 'NGO Volunteer';
          }
          
          volunteerDetails.push({
            id: volId,
            name: volunteerName,
            type: volunteerType,
            email: provide.Volunteer.USER?.email,
            reputationScore: provide.Volunteer.ReputationScore
          });
        }
      });
    });

    const totalVolunteers = uniqueVolunteers.size;

    // Get service categories breakdown
    const categoryBreakdown = {};
    services.forEach(service => {
      const category = service.CategoryS || 'Uncategorized';
      categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
    });

    return Response.json({
      damageId: parseInt(damageId),
      statistics: {
        totalServices,
        totalVolunteers,
        statusBreakdown: statusCounts,
        categoryBreakdown
      },
      volunteers: volunteerDetails,
      services: services.map(service => ({
        id: service.ServiceID,
        category: service.CategoryS,
        description: service.DescriptionS,
        status: service.StatusS,
        costEstimate: service.CostEstimateS,
        completionDate: service.CompletionDateS,
        validityStart: service.ValidityStartS,
        validityEnd: service.ValidityEndS,
        estimatedDuration: service.EstimatedDurationS,
        volunteerCount: service.PROVIDES.length
      }))
    });

  } catch (error) {
    console.error('Error fetching damage services statistics:', error);
    return Response.json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}