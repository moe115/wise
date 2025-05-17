// app/api/add-crisis/route.js
import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;


export async function POST(req) {
    try {
        const {
            Crisisname,
            areaWKT,
            CrisisDesc,
            CrisisStart,
            CrisisEnd,
            CrisisCountry,
            TypeC
        } = await req.json();
        
        console.log("Crisis data received:", { 
            Crisisname, 
            areaWKT, 
            CrisisDesc, 
            CrisisStart, 
            CrisisEnd, 
            CrisisCountry, 
            TypeC 
        });
      
        // Validate the WKT string format
        if (!areaWKT || !areaWKT.startsWith('POLYGON((') || !areaWKT.endsWith('))')) {
            throw new Error('Invalid WKT polygon format');
        }

        // Approach 1: Using Prisma's typed parameters for raw queries
        await prisma.$executeRaw`
            INSERT INTO "Crisis" (
                "Crisisname", "area", "CrisisDesc", "CrisisStart", "CrisisEnd", "CrisisCountry", "TypeC"
            ) VALUES (
                ${Crisisname}, 
                ST_GeomFromText(${areaWKT}, 4326), 
                ${CrisisDesc}, 
                ${CrisisStart ? new Date(CrisisStart) : null}::timestamp, 
                ${CrisisEnd ? new Date(CrisisEnd) : null}::timestamp, 
                ${CrisisCountry}, 
                ${TypeC}
            )
        `;

        return new Response(JSON.stringify({ message: 'Crisis reported successfully' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Insert error:', error);
        
        // Return more specific error information for debugging
        return new Response(JSON.stringify({ 
            error: 'Failed to report crisis', 
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}