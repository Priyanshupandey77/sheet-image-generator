"use client";
import { ChangeEventHandler, useState } from "react";
type SheetUrlInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export default function SheetUrlInput({ value, onChange }: SheetUrlInputProps) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Paste your Google Sheet URL..."
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition-all placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
      />
    </div>
  );
}
