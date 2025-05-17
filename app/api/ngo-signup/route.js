// File: app/api/ngo-signup/route.js

// Import PrismaClient with the correct path based on your schema configuration
import { PrismaClient } from '../../../generated/prisma';
import { NextResponse } from 'next/server';

// Proper initialization of Prisma client
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(request) {
    try {
        // Parse the JSON body from the request
        const body = await request.json();
        const { user, volunteer, ngo } = body;

        // Create the user first
        const newUser = await prisma.user.create({
            data: {
                email: user.email,
                role: 'volunteer', // Always set to volunteer
            },
        });

        // Create the volunteer entry using the user's ID
        const newVolunteer = await prisma.volunteer.create({
            data: {
                typeV: 'ngo', // Always set to ngo for this form
                phone: volunteer.phone,
                AvailabilityV: volunteer.AvailabilityV,
                ReputationScore: 1, // Always set to 1 for new volunteers
                CategoryV: volunteer.CategoryV,
                userId: newUser.id, // Link to the user we just created
            },
        });
        console.log('Creating NGO with:', {
            ngoName: ngo.ngoName,
            ngovolId: newVolunteer.volId
        });
        // Create the ngo entry using the volunteer's ID
        const newNgo = await prisma.nGO.create({
            data: {
                ngoName: ngo.ngoName,
                ngovolId: newVolunteer.volId, // Link to the volunteer we just created
            },
        });




        return NextResponse.json(
            {
                message: 'ngo volunteer registered successfully',
                userId: newUser.id,
                volunteerId: newVolunteer.volId,
                ngoId: newNgo.NGOId
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error in ngo signup:', error);

        if (error.code === 'P2002') {
            return NextResponse.json(
                { message: 'Email already in use. Please use a different email address.' },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                message: 'Error creating ngo volunteer account',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}