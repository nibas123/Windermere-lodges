"use server";

import { createUser } from "@/app/queries/auth";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  try {
    const response = await createUser({ name, email, password });
    console.log(response,"8888")
    return new NextResponse("user registered successfully", { status: 201 });
  } catch (e:any) {
    
    return new NextResponse(e.message, { status: 409 });
  }
}
