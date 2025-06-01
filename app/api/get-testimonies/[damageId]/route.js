
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
        const testimonies = await prisma.tESTIMONY.findMany({
            where: {
                damageId: parseInt(damageId)
            },
            include: {
                Volunteer: {
                    include: {
                        USER: true,
                        Citizen: true,
                        ngo: true
                    }
                },
                Damage: {
                    include: {
                        Crisis: true
                    }
                }
            },
            orderBy: {
                dateT: 'desc'
            }
        });

        // Format the response data
        const formattedTestimonies = testimonies.map(testimony => ({
            id: testimony.testimonyId,
            content: testimony.contentT,
            date: testimony.dateT,
            mediaURL: testimony.mediaURL,
            volunteer: {
                id: testimony.Volunteer.volId,
                email: testimony.Volunteer.USER?.email,
                phone: testimony.Volunteer.phone,
                type: testimony.Volunteer.typeV,
                category: testimony.Volunteer.CategoryV,
                reputationScore: testimony.Volunteer.ReputationScore,
                name: testimony.Volunteer.Citizen
                    ? `${testimony.Volunteer.Citizen.firstname || ''} ${testimony.Volunteer.Citizen.lastname || ''}`.trim()
                    : testimony.Volunteer.ngo?.ngoName || 'Unknown'
            },
            damage: {
                id: testimony.Damage.DamageID,
                category: testimony.Damage.CategoryD,
                description: testimony.Damage.Description,
                city: testimony.Damage.City,
                crisis: testimony.Damage.Crisis ? {
                    id: testimony.Damage.Crisis.CrisisId,
                    name: testimony.Damage.Crisis.Crisisname,
                    type: testimony.Damage.Crisis.TypeC,
                    country: testimony.Damage.Crisis.CrisisCountry
                } : null
            }
        }));

        return NextResponse.json({
            success: true,
            testimonies: formattedTestimonies,
            count: formattedTestimonies.length
        });

    } catch (error) {
        console.error('Error fetching testimonies:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch testimonies',
            error: error.message
        }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
