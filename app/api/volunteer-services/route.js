// app/api/volunteer-services/route.js

import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const volunteerId = searchParams.get('volunteerId');

    // You can get volunteer services either by email or volunteerId
    let volId = volunteerId;

    // If volunteerId is not provided, get it from email
    if (!volId && email) {
      const volunteer = await prisma.user.findUnique({
        where: { email },
        include: {
          volunteer: true
        }
      });

      if (!volunteer || !volunteer.volunteer) {
        return Response.json({ error: 'Volunteer not found' }, { status: 404 });
      }

      volId = volunteer.volunteer.volId;
    }

    if (!volId) {
      return Response.json({ error: 'Volunteer ID or email is required' }, { status: 400 });
    }

    // Fetch volunteer services with related damage information
    const volunteerServices = await prisma.pROVIDES.findMany({
      where: {
        VolunteerID: parseInt(volId)
      },
      include: {
        SERVICE: {
          include: {
            Damage: {
              include: {
                Crisis: true // Include crisis information if needed
              }
            }
          }
        }
      }
    });

    // Transform the data for easier frontend consumption
    const servicesWithDamage = volunteerServices.map(provides => ({
      serviceId: provides.SERVICE.ServiceID,
      service: {
        id: provides.SERVICE.ServiceID,
        category: provides.SERVICE.CategoryS,
        description: provides.SERVICE.DescriptionS,
        status: provides.SERVICE.StatusS,
        costEstimate: provides.SERVICE.CostEstimateS,
        completionDate: provides.SERVICE.CompletionDateS,
        validityStart: provides.SERVICE.ValidityStartS,
        validityEnd: provides.SERVICE.ValidityEndS,
        estimatedDuration: provides.SERVICE.EstimatedDurationS
      },
      damage: {
        id: provides.SERVICE.Damage.DamageID,
        category: provides.SERVICE.Damage.CategoryD,
        description: provides.SERVICE.Damage.Description,
        startDate: provides.SERVICE.Damage.StartDateD,
        endDate: provides.SERVICE.Damage.EndDateD,
        financialEstimation: provides.SERVICE.Damage.FinancialEstimationD,
        city: provides.SERVICE.Damage.City,
        radius: provides.SERVICE.Damage.Radius,
        geoLocation: provides.SERVICE.Damage.GeoLonglat,
        crisis: provides.SERVICE.Damage.Crisis ? {
          id: provides.SERVICE.Damage.Crisis.CrisisId,
          // Add other crisis fields as needed
        } : null
      }
    }));

    return Response.json({
      volunteerId: volId,
      totalServices: servicesWithDamage.length,
      services: servicesWithDamage
    });

  } catch (error) {
    console.error('Error fetching volunteer services:', error);
    return Response.json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}