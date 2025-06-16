// app/api/get-user-role/route.js

import { PrismaClient } from '../../../generated/prisma';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        volunteer: {
          select: {
            volId: true,
            typeV: true,
            phone: true,
            AvailabilityV: true,
            ReputationScore: true,
            CategoryV: true
          }
        }
      }
    });

    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    return Response.json({
      userId: user.id,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      isVolunteer: user.role === 'volunteer',
      isEmployee: user.role === 'employee',
      volunteerProfile: user.volunteer || null
    });

  } catch (error) {
    console.error('Error fetching user role:', error);
    return Response.json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}