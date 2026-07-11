import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
  const body = await request.json();

  const sheetUrl = body.sheetUrl;
  const valid = sheetUrl.includes("docs.google.com/spreadsheets");
  if (!valid) {
    return NextResponse.json({
      success: false,
      message: "Invalid Google Sheet URL",
    });
  }
  const startIndex = sheetUrl.indexOf("d/") + 2;
  const endIndex = sheetUrl.indexOf("/edit");
  const sheetId = sheetUrl.substring(startIndex, endIndex);

  return NextResponse.json({
    message: "URL received successfully",
    success: true,
    sheetId,
  });
}
