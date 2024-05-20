import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "開発途中です",
  });
}
