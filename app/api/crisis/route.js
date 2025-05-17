// app/api/crises/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';
 
// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;


export async function GET() {
  try {
    // Query with raw SQL to properly handle PostGIS geometry
    const crises = await prisma.$queryRaw`
      SELECT 
        "CrisisId",
        "Crisisname",
        "CrisisDesc",
        "CrisisStart",
        "CrisisEnd",
        "CrisisCountry",
        "TypeC",
        ST_AsGeoJSON(area) as area_geojson
      FROM "Crisis"
    `;

    // Transform the data to include proper GeoJSON
    console.log("frrfrfrfr",crises);
    const formattedCrises = crises.map(crisis => ({
      id: crisis.CrisisId,
      name: crisis.Crisisname,
      description: crisis.CrisisDesc,
      startDate: crisis.CrisisStart,
      endDate: crisis.CrisisEnd,
      country: crisis.CrisisCountry,
      type: crisis.TypeC,
      // Parse the GeoJSON string to an actual object
      geometry: JSON.parse(crisis.area_geojson)
    }));

    return NextResponse.json({ crises: formattedCrises });
  } catch (error) {
    console.error('Error fetching crisis data:', error);
    return NextResponse.json({ error: 'Failed to fetch crisis data' }, { status: 500 });
  }
}