import { PrismaClient } from '../../../generated/prisma';

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
