"use client";
import { ChangeEventHandler, useState } from "react";
type SheetUrlInputProps = {
    value:string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
export default function SheetUrlInput({
    value,
    onChange
}: SheetUrlInputProps) {
  
  return (
    <div>
      <input
        type="text"
        placeholder="Paste your Google Sheet URL..."
        className="flex-1 bg-zinc-800 rounded-lg p-3"
      />
    </div>
  );
}
