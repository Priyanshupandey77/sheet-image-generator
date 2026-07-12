import { NextResponse } from "next/server";

export async function GET() {
  console.log(process.env.GOOGLE_SHEETS_API_KEY);
  return NextResponse.json({ 
   sheetUrl: "https://docs.google.com/spreadsheets/d/1AbCdEfGh123456789/edit?gid=0"
  });
}
