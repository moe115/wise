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

        // Insert testimony record using raw SQL
        await prisma.$executeRaw`
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

        return new Response(JSON.stringify({
            message: 'Testimony added successfully',
            data: {
                contentT,
                mediaURL,
                damageId: parsedDamageId,
                volunteerId: parsedVolunteerId
            }
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Insert error:', error);

        // Return more specific error information for debugging
        return new Response(JSON.stringify({
            error: 'Failed to add testimony',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}