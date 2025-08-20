import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, email, password } = await request.json();



  return new NextResponse("User has been created", { status: 201 });
}
