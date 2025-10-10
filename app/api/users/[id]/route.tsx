import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!false)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

// PUT is used for replacting an object
// PATCH is used for updating one or more properties
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate the request body
  const body = await request.json();
  // If invalid, return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });
  // Fetch the user with the given id

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  // IF doesn't exist, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Update the user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  // Return the updated user
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch User from database
  // If not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete the user
  return NextResponse.json({});
  // Return 200
}
