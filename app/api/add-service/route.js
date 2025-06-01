import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req) {
    try {
        const {
            categoryS,
            descriptionS,
            statusS,
            costEstimateS,
            completionDateS,
            validityStartS,
            validityEndS,
            estimatedDurationS,
            damageId,
        } = await req.json();
       
       
        const parsedDamageId = parseInt(damageId);
       
       
        let parsedCostEstimate = null;
        if (costEstimateS !== null && costEstimateS !== undefined && costEstimateS !== '') {
            parsedCostEstimate = parseFloat(costEstimateS);
            if (isNaN(parsedCostEstimate) || parsedCostEstimate < 0) {
                throw new Error('Cost estimate must be a valid positive number');
            }
        }
        // Insert service record using raw SQL
       await prisma.$executeRaw`
            INSERT INTO "SERVICE" (
                "CategoryS", 
                "DescriptionS", 
                "StatusS",
                "CostEstimateS",
                "CompletionDateS",
                "ValidityStartS",
                "ValidityEndS",
                "EstimatedDurationS",
                "DamageID"
            ) VALUES (
                ${categoryS},
                ${descriptionS},
                ${statusS},
                ${parsedCostEstimate}::decimal,
                ${completionDateS ? new Date(completionDateS) : null}::date,
                ${validityStartS ? new Date(validityStartS) : null}::date,
                ${validityEndS ? new Date(validityEndS) : null}::date,
                ${estimatedDurationS},
                ${parsedDamageId}::integer
            )
        `;

        return new Response(JSON.stringify({
            message: 'Service added successfully',
            data: {
                categoryS,
                descriptionS,
                statusS,
                costEstimateS: parsedCostEstimate,
                completionDateS,
                validityStartS,
                validityEndS,
                estimatedDurationS,
                damageId: parsedDamageId,
            }
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Insert error:', error);

        // Return more specific error information for debugging
        return new Response(JSON.stringify({
            error: 'Failed to add service',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}