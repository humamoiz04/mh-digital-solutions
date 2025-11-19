import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Redirect to home page (Supabase auth removed)
  return NextResponse.redirect(new URL("/", request.url))
}
