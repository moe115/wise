import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req) {
    try {
        const {
            contentT,
            mediaURL,
            damageId,
            volunteerId
        } = await req.json();

        console.log("Testimony data received:", {
            contentT,
            mediaURL,
            damageId,
            volunteerId
        });

        // Validate required fields
        if (!contentT) {
            throw new Error('contentT (testimony content) is required');
        }

        if (!damageId) {
            throw new Error('damageId is required');
        }

        if (!volunteerId) {
            throw new Error('volunteerId is required');
        }

        // Validate content length
        if (contentT.length > 1000) {
            throw new Error('Content cannot exceed 1000 characters');
        }

        // Validate IDs are valid numbers
        const parsedDamageId = parseInt(damageId);
        const parsedVolunteerId = parseInt(volunteerId);

        if (isNaN(parsedDamageId) || isNaN(parsedVolunteerId)) {
            throw new Error('Invalid damageId or volunteerId - must be valid numbers');
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

        // Check if damage exists
        const damageCheck = await prisma.$queryRaw`
            SELECT "DamageID" FROM "Damage" 
            WHERE "DamageID" = ${parsedDamageId}
        `;

        if (damageCheck.length === 0) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Damage record not found'
            }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Use a transaction to ensure both operations succeed or fail together
        await prisma.$transaction(async (tx) => {
            // Insert testimony record
            await tx.$executeRaw`
                INSERT INTO "TESTIMONY" (
                    "contentT", 
                    "mediaURL", 
                    "damageId", 
                    "volunteerId",
                    "dateT"
                ) VALUES (
                    ${contentT},
                    ${mediaURL},
                    ${parsedDamageId}::integer,
                    ${parsedVolunteerId}::integer,
                    NOW()
                )
            `;

            // Update volunteer's reputation score by adding 0.5
            await tx.$executeRaw`
                UPDATE "Volunteer" 
                SET "ReputationScore" = "ReputationScore" + 0.5
                WHERE "volId" = ${parsedVolunteerId}
            `;
        });

        // Get updated reputation score
        const updatedVolunteer = await prisma.$queryRaw`
            SELECT "ReputationScore" FROM "Volunteer" 
            WHERE "volId" = ${parsedVolunteerId}
        `;

        return new Response(JSON.stringify({
            success: true,
            message: 'Testimony added successfully and reputation score updated',
            data: {
                contentT,
                mediaURL,
                damageId: parsedDamageId,
                volunteerId: parsedVolunteerId,
                newReputationScore: updatedVolunteer[0]?.ReputationScore || 0
            }
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Insert error:', error);

        // Return more specific error information for debugging
        return new Response(JSON.stringify({
            success: false,
            error: 'Failed to add testimony',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}