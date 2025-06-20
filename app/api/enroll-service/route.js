import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req) {
    try {
        const { serviceId, volunteerId } = await req.json();

        console.log("Enrollment data received:", {
            serviceId,
            volunteerId
        });

        // Validate required fields
        if (!serviceId) {
            throw new Error('serviceId is required');
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

        // Check if service exists
        const serviceCheck = await prisma.$queryRaw`
            SELECT "ServiceID" FROM "SERVICE" 
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

        // Check if volunteer exists and get current reputation score
        const volunteerCheck = await prisma.$queryRaw`
            SELECT "volId", "ReputationScore" FROM "Volunteer" 
            WHERE "volId" = ${parsedVolunteerId}
        `;

        if (volunteerCheck.length === 0) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Volunteer not found'
            }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Check if enrollment already exists
        const existingEnrollment = await prisma.$queryRaw`
            SELECT "VolunteerID", "ServiceID" FROM "PROVIDES" 
            WHERE "VolunteerID" = ${parsedVolunteerId} 
            AND "ServiceID" = ${parsedServiceId}
        `;

        if (existingEnrollment.length > 0) {
            return new Response(JSON.stringify({
                success: false,
                message: 'You are already enrolled in this service'
            }), {
                status: 409,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Use a transaction to ensure both operations succeed or fail together
        await prisma.$transaction(async (tx) => {
            // Create the enrollment
            await tx.$executeRaw`
                INSERT INTO "PROVIDES" (
                    "VolunteerID", 
                    "ServiceID"
                ) VALUES (
                    ${parsedVolunteerId}::integer,
                    ${parsedServiceId}::integer
                )
            `;

            // Update volunteer's reputation score by adding 1.0
            await tx.$executeRaw`
                UPDATE "Volunteer" 
                SET "ReputationScore" = "ReputationScore" + 1.0
                WHERE "volId" = ${parsedVolunteerId}
            `;
        });

        // Get total enrollments for this service and updated reputation score
        const [enrollmentCount, updatedVolunteer] = await Promise.all([
            prisma.$queryRaw`
                SELECT COUNT(*)::integer as count FROM "PROVIDES" 
                WHERE "ServiceID" = ${parsedServiceId}
            `,
            prisma.$queryRaw`
                SELECT "ReputationScore" FROM "Volunteer" 
                WHERE "volId" = ${parsedVolunteerId}
            `
        ]);

        return new Response(JSON.stringify({
            success: true,
            message: 'Successfully enrolled in service and reputation score updated',
            enrollment: {
                volunteerId: parsedVolunteerId,
                serviceId: parsedServiceId
            },
            service: {
                id: parsedServiceId,
                totalEnrollments: enrollmentCount[0]?.count || 0
            },
            volunteer: {
                id: parsedVolunteerId,
                newReputationScore: updatedVolunteer[0]?.ReputationScore || 0
            }
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Enrollment error:', error);

        // Return more specific error information for debugging
        return new Response(JSON.stringify({
            success: false,
            error: 'Failed to enroll in service',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}