// This file is deprecated - chat is now fully client-side
// Keeping this for backwards compatibility - returns client-side message
import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({
    response: "Chat is now fully client-side. Please use the chat widget on the website.",
  })
}
