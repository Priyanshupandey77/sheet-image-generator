"use client";
import { useState } from "react";
import Button from "./components/common/Button";
import HeroSection from "./components/hero/HeroSection";
import SheetUrlInput from "./components/sheet/SheetUrlInput";
import PatientList from "./components/patient/PatientList";

export default function Home() {
  const [sheetUrl, setSheetUrl] = useState("");
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleFetch() {
    try {
      setError("");
      setLoading(true);
      console.log("Sending URL:", sheetUrl);
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
      console.log("Response:", data);
      console.log("Is Array:", Array.isArray(data));
      if (data.success === false) {
        setError(data.message);
        return;
      }
      setPatients(data);
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-indigo-50 dark:from-black dark:via-zinc-950 dark:to-indigo-950">
  <div className="mx-auto flex max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">

    {/* Hero */}
    <div className="text-center">
      <HeroSection />
    </div>

    {/* Input Card */}
    <section className="mt-8 rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">

        <div className="w-full flex-1">
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Google Sheet URL
          </label>

          <SheetUrlInput
            value={sheetUrl}
            onChange={(e) => setSheetUrl(e.target.value)}
          />
        </div>

        <Button
          type="button"
          onClick={handleFetch}
          disabled={loading || !sheetUrl}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Fetching
            </span>
          ) : (
            "Fetch Data"
          )}
        </Button>

      </div>

      {error && (
        <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
          {error}
        </div>
      )}
    </section>


    {/* Patient Results */}
    <section className="mt-10">

      {patients.length > 0 ? (
        <>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Patients
            </h2>

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              {patients.length} Records
            </span>
          </div>

          <PatientList patients={patients} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-700">
          <div className="mb-4 rounded-full bg-indigo-100 p-4 text-2xl dark:bg-indigo-950">
            📄
          </div>

          <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
            No patient data yet
          </h3>

          <p className="mt-2 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
            Enter your Google Sheet URL above and click "Fetch Data" to load patient records.
          </p>
        </div>
      )}

    </section>

  </div>
</main>
  );
}
