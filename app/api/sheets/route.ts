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
  const metadataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${process.env.GOOGLE_SHEETS_API_KEY}`;
  const metadataResponse = await fetch(metadataUrl);
  if (!metadataResponse.ok) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch spreadsheet metadata",
      },
      { status: 400 },
    );
  }

  const metadata = await metadataResponse.json();

  const sheetName = metadata.sheets[0].properties.title;

  const googleApiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetName)}?key=${process.env.GOOGLE_SHEETS_API_KEY}`;

  const response = await fetch(googleApiUrl);
  if (!response.ok) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch response",
      },
      { status: 400 },
    );
  }

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
