import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req) {
    try {
        const {
            CategoryD,
            StartDateD,
            EndDateD,
            FinancialEstimationD,
            CrisisID,
            Description,
            latitude,
            longitude,
            Radius,
            City
        } = await req.json();

        console.log("Damage data received:", {
            CategoryD,
            StartDateD,
            EndDateD,
            FinancialEstimationD,
            CrisisID,
            Description,
            latitude,
            longitude,
            Radius,
            City
        });

        // Validate required fields
        if (!CategoryD) {
            throw new Error('CategoryD (damage type) is required');
        }

        if (!latitude || !longitude) {
            throw new Error('Latitude and longitude are required');
        }

        // Validate coordinates are valid numbers
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);

        if (isNaN(lat) || isNaN(lng)) {
            throw new Error('Invalid latitude or longitude values');
        }

        // Validate latitude and longitude ranges
        if (lat < -90 || lat > 90) {
            throw new Error('Latitude must be between -90 and 90');
        }

        if (lng < -180 || lng > 180) {
            throw new Error('Longitude must be between -180 and 180');
        }

        // Create WKT POINT string for PostGIS
        const pointWKT = `POINT(${lng} ${lat})`;

        // Insert damage record using raw SQL with PostGIS functions
        await prisma.$executeRaw`
            INSERT INTO "Damage" (
                "CategoryD", 
                "StartDateD", 
                "EndDateD", 
                "FinancialEstimationD", 
                "CrisisID", 
                "Description", 
                "GeoLonglat", 
                "Radius", 
                "City"
            ) VALUES (
                ${CategoryD},
                ${StartDateD ? new Date(StartDateD) : null}::date,
                ${EndDateD ? new Date(EndDateD) : null}::date,
                ${FinancialEstimationD ? parseFloat(FinancialEstimationD) : null}::decimal,
                ${CrisisID ? parseInt(CrisisID) : null}::integer,
                ${Description},
                ST_GeomFromText(${pointWKT}, 4326),
                ${Radius ? parseFloat(Radius) : null}::float,
                ${City}
            )
        `;

        return new Response(JSON.stringify({
            message: 'Damage reported successfully',
            data: {
                CategoryD,
                City,
                coordinates: { latitude: lat, longitude: lng },
                Radius: Radius ? parseFloat(Radius) : null
            }
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Insert error:', error);

        // Return more specific error information for debugging
        return new Response(JSON.stringify({
            error: 'Failed to report damage',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}