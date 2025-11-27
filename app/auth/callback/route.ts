import { NextResponse } from "next/server"

export async function POST(request: Request) {
  // Redirect to home page (Supabase auth removed)
  return NextResponse.redirect(new URL("/", request.url))
}
