// app/api/get-damages/route.js
import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const crisisId = searchParams.get('crisisId');

        // Build the query with optional crisis filter
        let whereClause = '';
        let queryParams = [];

        if (crisisId) {
            whereClause = 'WHERE d."CrisisID" = $1';
            queryParams.push(parseInt(crisisId));
        }

        // Query to get damages with their geographic coordinates converted from PostGIS geometry
        const damagesQuery = `
            SELECT 
                d."DamageID",
                d."CategoryD",
                d."StartDateD",
                d."EndDateD",
                d."FinancialEstimationD",
                d."CrisisID",
                d."Description",
                d."Radius",
                d."City",
                ST_X(d."GeoLonglat") as longitude,
                ST_Y(d."GeoLonglat") as latitude,
                c."Crisisname",
                c."TypeC" as crisis_type,
                c."CrisisCountry"
            FROM "Damage" d
            LEFT JOIN "Crisis" c ON d."CrisisID" = c."CrisisId"
            ${whereClause}
            ORDER BY d."DamageID" DESC
        `;

        const damages = await prisma.$queryRawUnsafe(queryParams.length > 0 ? 
            queryParams.reduce((query, param, index) => 
                query.replace(`$${index + 1}`, `'${param}'`), damagesQuery
            ) : damagesQuery
        );

        // Transform the data to a more convenient format
        const formattedDamages = damages.map(damage => ({
            id: damage.DamageID,
            category: damage.CategoryD,
            startDate: damage.StartDateD,
            endDate: damage.EndDateD,
            financialEstimation: damage.FinancialEstimationD ? parseFloat(damage.FinancialEstimationD) : null,
            crisisId: damage.CrisisID,
            description: damage.Description,
            radius: damage.Radius,
            city: damage.City,
            coordinates: {
                latitude: parseFloat(damage.latitude),
                longitude: parseFloat(damage.longitude)
            },
            crisis: {
                name: damage.Crisisname,
                type: damage.crisis_type,
                country: damage.CrisisCountry
            }
        }));

        return new Response(JSON.stringify({
            damages: formattedDamages,
            count: formattedDamages.length
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error fetching damages:', error);
        
        return new Response(JSON.stringify({ 
            error: 'Failed to fetch damages', 
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}