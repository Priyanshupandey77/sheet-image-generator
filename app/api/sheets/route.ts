import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
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

  const googleApiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${process.env.GOOGLE_SHEETS_API_KEY}`;

  const response = await fetch(googleApiUrl);

  const data = await response.json();
  const headers = data.values[0];
  const patients = [];
  for (let i = 1; i < data.values.length; i++) {
    const row = data.values[i];
    const patient: Record<string, string> = {};
    for (let j = 0; j < headers.length; j++) {
      patient[headers[j]] = row[j];
    }
    patients.push(patient);
  }
  
  return NextResponse.json(patients);
}
