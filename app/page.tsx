"use client";
import { useState } from "react";
import Button from "./components/common/Button";
import HeroSection from "./components/hero/HeroSection";
import SheetUrlInput from "./components/sheet/SheetUrlInput";

export default function Home() {
  const [sheetUrl, setSheetUrl] = useState("");
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleFetch() {
    try {
      setError("");
      setLoading(true);
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sheetUrl }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <HeroSection />
        <SheetUrlInput
          value={sheetUrl}
          onChange={(e) => setSheetUrl(e.target.value)}
        />
        <Button
          children="Fetch Data"
          onClick={undefined}
          disabled={undefined}
          type={undefined}
        />
        
      </div>
    </main>
  );
}
