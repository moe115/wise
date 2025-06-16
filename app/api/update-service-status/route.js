// app/api/update-service-status/route.js

import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function PUT(request) {
  try {
    const body = await request.json();
    const { serviceId, status, volunteerId } = body;

    // Validate required fields
    if (!serviceId || !status || !volunteerId) {
      return Response.json({ 
        error: 'Service ID, status, and volunteer ID are required' 
      }, { status: 400 });
    }

    // Validate status options
    const validStatuses = ['pending', 'in progress', 'completed', 'cancelled', 'on hold'];
    if (!validStatuses.includes(status.toLowerCase())) {
      return Response.json({ 
        error: 'Invalid status. Valid options are: ' + validStatuses.join(', ') 
      }, { status: 400 });
    }

    // Check if the volunteer is actually enrolled in this service
    const volunteerService = await prisma.pROVIDES.findUnique({
      where: {
        VolunteerID_ServiceID: {
          VolunteerID: parseInt(volunteerId),
          ServiceID: parseInt(serviceId)
        }
      }
    });

    if (!volunteerService) {
      return Response.json({ 
        error: 'Volunteer is not enrolled in this service' 
      }, { status: 403 });
    }

    // Update the service status
    const updatedService = await prisma.sERVICE.update({
      where: {
        ServiceID: parseInt(serviceId)
      },
      data: {
        StatusS: status,
        // If status is completed, set completion date
        ...(status.toLowerCase() === 'completed' && {
          CompletionDateS: new Date()
        })
      },
      include: {
        Damage: {
          include: {
            Crisis: true
          }
        }
      }
    });

    // Return the updated service data
    const responseData = {
      serviceId: updatedService.ServiceID,
      service: {
        id: updatedService.ServiceID,
        category: updatedService.CategoryS,
        description: updatedService.DescriptionS,
        status: updatedService.StatusS,
        costEstimate: updatedService.CostEstimateS,
        completionDate: updatedService.CompletionDateS,
        validityStart: updatedService.ValidityStartS,
        validityEnd: updatedService.ValidityEndS,
        estimatedDuration: updatedService.EstimatedDurationS
      },
      damage: {
        id: updatedService.Damage.DamageID,
        category: updatedService.Damage.CategoryD,
        description: updatedService.Damage.Description,
        startDate: updatedService.Damage.StartDateD,
        endDate: updatedService.Damage.EndDateD,
        financialEstimation: updatedService.Damage.FinancialEstimationD,
        city: updatedService.Damage.City,
        radius: updatedService.Damage.Radius,
        geoLocation: updatedService.Damage.GeoLonglat,
        crisis: updatedService.Damage.Crisis ? {
          id: updatedService.Damage.Crisis.CrisisId,
        } : null
      }
    };

    return Response.json({
      message: 'Service status updated successfully',
      data: responseData
    });

  } catch (error) {
    console.error('Error updating service status:', error);
    return Response.json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}