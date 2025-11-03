import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!false)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

// PUT is used for replacting an object
// PATCH is used for updating one or more properties
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // Validate the request body
  const body = await request.json();
  // If invalid, return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });
  // Fetch the user with the given id

  const user = await prisma.user.findUnique({
    where: { id },
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
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // Fetch User from database
  const user = await prisma.user.findUnique({
    where: { id },
  });
  // If not found, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete the user
  await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({});
  // Return 200
}
