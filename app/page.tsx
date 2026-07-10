"use client";
import { useState } from "react";
import Button from "./components/common/Button";
import HeroSection from "./components/hero/HeroSection";
import SheetUrlInput from "./components/sheet/SheetUrlInput";

export default function Home() {
  const [sheetUrl, setSheetUrl] = useState("");
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <HeroSection />
        <SheetUrlInput
          value={sheetUrl}
          onChange={(e) => setSheetUrl(e.target.value)}
        />
        <Button children={undefined} onClick={undefined} disabled={undefined} type={undefined} />
      </div>
    </main>
  );
}
