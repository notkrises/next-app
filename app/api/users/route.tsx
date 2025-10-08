import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

// this is how you create an endpoint for returning a collection of objects
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

//POST handles post requests which are used for creating objects
export async function POST(request: NextRequest) {
  //  Validate
  const body = await request.json();
  const validation = schema.safeParse(body);
  // If invalid, return 400 error
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });
  // Else, return
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); //common practice to set status to 201 when a new object is created
}
