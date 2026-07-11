import { NextResponse } from "next/server";

export async function GET() {

  return NextResponse.json({ 
   sheetUrl: "https://docs.google.com/spreadsheets/d/1AbCdEfGh123456789/edit?gid=0"
  });
}
