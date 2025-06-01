import { PrismaClient } from '/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request, { params }) {
    const { damageId } = params;

    if (!damageId) {
        return NextResponse.json({ message: 'Damage ID is required' }, { status: 400 });
    }

    try {
        // Use raw SQL to fetch services with related data
        const services = await prisma.$queryRaw`
            SELECT 
                s."ServiceID",
                s."CategoryS",
                s."DescriptionS",
                s."StatusS",
                s."CostEstimateS",
                s."CompletionDateS",
                s."ValidityStartS",
                s."ValidityEndS",
                s."EstimatedDurationS",
                s."DamageID",
                -- Damage information
                d."DamageID" as damage_id,
                d."CategoryD" as damage_category,
                d."Description" as damage_description,
                d."City" as damage_city,
                d."StartDateD" as damage_start_date,
                d."EndDateD" as damage_end_date,
                d."FinancialEstimationD" as damage_financial_estimation,
                -- Crisis information
                c."CrisisId" as crisis_id,
                c."Crisisname" as crisis_name,
                c."TypeC" as crisis_type,
                c."CrisisCountry" as crisis_country,
                c."CrisisStart" as crisis_start,
                c."CrisisEnd" as crisis_end
            FROM "SERVICE" s
            LEFT JOIN "Damage" d ON s."DamageID" = d."DamageID"
            LEFT JOIN "Crisis" c ON d."CrisisID" = c."CrisisId"
            WHERE s."DamageID" = ${parseInt(damageId)}::integer
            ORDER BY s."ValidityStartS" DESC, s."ServiceID" DESC
        `;

        // Format the response data
        const formattedServices = services.map(service => ({
            id: service.ServiceID,
            category: service.CategoryS,
            description: service.DescriptionS,
            status: service.StatusS,
            costEstimate: service.CostEstimateS ? parseFloat(service.CostEstimateS) : null,
            completionDate: service.CompletionDateS,
            validityStart: service.ValidityStartS,
            validityEnd: service.ValidityEndS,
            estimatedDuration: service.EstimatedDurationS,
            damage: {
                id: service.damage_id,
                category: service.damage_category,
                description: service.damage_description,
                city: service.damage_city,
                startDate: service.damage_start_date,
                endDate: service.damage_end_date,
                financialEstimation: service.damage_financial_estimation ? parseFloat(service.damage_financial_estimation) : null,
                crisis: service.crisis_id ? {
                    id: service.crisis_id,
                    name: service.crisis_name,
                    type: service.crisis_type,
                    country: service.crisis_country,
                    start: service.crisis_start,
                    end: service.crisis_end
                } : null
            }
        }));

        return NextResponse.json({
            success: true,
            services: formattedServices,
            count: formattedServices.length
        });

    } catch (error) {
        console.error('Error fetching services:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch services',
            error: error.message
        }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}