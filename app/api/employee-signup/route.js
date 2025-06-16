// File: app/api/citizen-signup/route.js

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
    const { user  } = body;

     

    // Create the user first
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        role: 'employee',  
      },
    });

    console.log('User created successfully:', newUser.id);
 

 
    return NextResponse.json(
      {
        message: 'Employee volunteer registered successfully',
        userId: newUser.id,
       
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error in Employee signup:', error);

    // Provide more specific error messages for common issues
    if (error.code === 'P2002') {
      return NextResponse.json(
        { message: 'Email already in use. Please use a different email address.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: 'Error creating Employee account',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  } finally {
    // Close the Prisma client connection to prevent connection leaks
    await prisma.$disconnect();
  }
}