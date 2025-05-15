// File: app/api/citizen-signup/route.js

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    const { user, volunteer, citizen } = body;

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
        typeV: 'citizen', // Always set to citizen for this form
        phone: volunteer.phone,
        AvailabilityV: volunteer.AvailabilityV,
        ReputationScore: 1, // Always set to 1 for new volunteers
        CategoryV: volunteer.CategoryV,
        userId: newUser.id, // Link to the user we just created
      },
    });

    // Create the citizen entry using the volunteer's ID
    const newCitizen = await prisma.citizen.create({
      data: {
        firstname: citizen.firstname,
        lastname: citizen.lastname,
        citvolId: newVolunteer.volId, // Link to the volunteer we just created
      },
    });

    return NextResponse.json(
      {
        message: 'Citizen volunteer registered successfully',
        userId: newUser.id,
        volunteerId: newVolunteer.volId,
        citizenId: newCitizen.CitizenId
      }, 
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error in citizen signup:', error);
    
    // Provide more specific error messages for common issues
    if (error.code === 'P2002') {
      return NextResponse.json(
        { message: 'Email already in use. Please use a different email address.' }, 
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        message: 'Error creating citizen volunteer account',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined 
      }, 
      { status: 500 }
    );
  } finally {
    // Close the Prisma client connection to prevent connection leaks
    await prisma.$disconnect();
  }
}