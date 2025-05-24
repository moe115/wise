// pages/api/get-volunteer.js or app/api/get-volunteer/route.js (depending on your Next.js version)

import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// For App Router (Next.js 13+)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const volunteer = await prisma.user.findUnique({
      where: { email },
      include: {
        volunteer: true
      }
    });

    if (!volunteer || !volunteer.volunteer) {
      return Response.json({ error: 'Volunteer not found' }, { status: 404 });
    }

    return Response.json({ 
      volunteerId: volunteer.volunteer.volId,
      volunteer: volunteer.volunteer 
    });

  } catch (error) {
    console.error('Error fetching volunteer:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// For Pages Router (Next.js 12 and below)
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const volunteer = await prisma.user.findUnique({
      where: { email },
      include: {
        volunteer: true
      }
    });

    if (!volunteer || !volunteer.volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }

    return res.status(200).json({ 
      volunteerId: volunteer.volunteer.volId,
      volunteer: volunteer.volunteer 
    });

  } catch (error) {
    console.error('Error fetching volunteer:', error);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}