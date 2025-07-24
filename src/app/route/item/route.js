

import { NextResponse } from "next/server";



export async function GET(req) {

  
  const users = [
    { name: 'Samiul Islam', email: 'samiul@gmail.com' },
    { name: 'Al-Amin Khan', email: 'alamin@gmail.com' },
    { name: 'Nahid Hasan', email: 'nahid@gmail.com' },
    { name: 'Tanjim Rahman', email: 'tanjim@gmail.com' },
    { name: 'Bipul Prodhan', email: 'bipul@gmail.com' },
  ];

  try {
  
    return NextResponse.json({
      message: 'Users created successfully',
      data: users
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: 'Failed to create users',
      error: error.message
    }, { status: 500 });
  }
}
