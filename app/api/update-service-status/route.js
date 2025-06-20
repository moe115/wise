import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function PUT(req) {
  try {
    const { serviceId, status, volunteerId } = await req.json();

    console.log("Service status update data received:", {
      serviceId,
      status,
      volunteerId
    });

    // Validate required fields
    if (!serviceId) {
      throw new Error('serviceId is required');
    }

    if (!status) {
      throw new Error('status is required');
    }

    if (!volunteerId) {
      throw new Error('volunteerId is required');
    }

    // Validate IDs are valid numbers
    const parsedServiceId = parseInt(serviceId);
    const parsedVolunteerId = parseInt(volunteerId);

    if (isNaN(parsedServiceId) || isNaN(parsedVolunteerId)) {
      throw new Error('Invalid serviceId or volunteerId - must be valid numbers');
    }

    // Validate status length (based on schema: VARCHAR(50))
    if (status.length > 50) {
      throw new Error('Status cannot exceed 50 characters');
    }

    // Check if service exists and get current status
    const serviceCheck = await prisma.$queryRaw`
            SELECT "ServiceID", "StatusS" FROM "SERVICE" 
            WHERE "ServiceID" = ${parsedServiceId}
        `;

    if (serviceCheck.length === 0) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Service not found'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const currentStatus = serviceCheck[0].StatusS;

    // Check if volunteer exists and is enrolled in this service
    const enrollmentCheck = await prisma.$queryRaw`
            SELECT p."VolunteerID", p."ServiceID", v."ReputationScore"
            FROM "PROVIDES" p
            JOIN "Volunteer" v ON p."VolunteerID" = v."volId"
            WHERE p."ServiceID" = ${parsedServiceId} 
            AND p."VolunteerID" = ${parsedVolunteerId}
        `;

    if (enrollmentCheck.length === 0) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Volunteer not found or not enrolled in this service'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if status is being changed to "Completed"
    const isStatusChangeToCompleted = status.toLowerCase() === 'completed' &&
      currentStatus?.toLowerCase() !== 'completed';

    // Use a transaction to ensure both operations succeed or fail together
    let updatedReputationScore = enrollmentCheck[0].ReputationScore;

    await prisma.$transaction(async (tx) => {
      // Update service status
      await tx.$executeRaw`
                UPDATE "SERVICE" 
                SET "StatusS" = ${status}
                WHERE "ServiceID" = ${parsedServiceId}
            `;

      // If status is changed to "Completed", update completion date and reputation score
      if (isStatusChangeToCompleted) {
        // Update completion date
        await tx.$executeRaw`
                    UPDATE "SERVICE" 
                    SET "CompletionDateS" = CURRENT_DATE
                    WHERE "ServiceID" = ${parsedServiceId}
                `;

        // Update volunteer's reputation score by adding 1.5
        await tx.$executeRaw`
                    UPDATE "Volunteer" 
                    SET "ReputationScore" = "ReputationScore" + 1.5
                    WHERE "volId" = ${parsedVolunteerId}
                `;
      }
    });

    // Get updated reputation score if it was changed
    if (isStatusChangeToCompleted) {
      const updatedVolunteer = await prisma.$queryRaw`
                SELECT "ReputationScore" FROM "Volunteer" 
                WHERE "volId" = ${parsedVolunteerId}
            `;
      updatedReputationScore = updatedVolunteer[0]?.ReputationScore || updatedReputationScore;
    }

    // Get updated service information
    const updatedService = await prisma.$queryRaw`
            SELECT "ServiceID", "StatusS", "CompletionDateS" FROM "SERVICE" 
            WHERE "ServiceID" = ${parsedServiceId}
        `;

    return new Response(JSON.stringify({
      success: true,
      message: isStatusChangeToCompleted
        ? 'Service status updated to Completed and reputation score increased'
        : 'Service status updated successfully',
      data: {
        service: {
          id: parsedServiceId,
          previousStatus: currentStatus,
          newStatus: status,
          completionDate: updatedService[0]?.CompletionDateS || null
        },
        volunteer: {
          id: parsedVolunteerId,
          reputationScore: updatedReputationScore,
          scoreIncreased: isStatusChangeToCompleted
        }
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Service status update error:', error);

    // Return more specific error information for debugging
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to update service status',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}