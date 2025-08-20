"use server";

import { createUser } from "@/app/queries/auth";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  try {
    const response = await createUser({ name, email, password });
    return NextResponse.json({
      message: "user registered successfully",
      status: 201,
      ok: true,
    });
  } catch (e: any) {
    return NextResponse.json({ message: e.message, status: 409, ok: false});
  }
}
