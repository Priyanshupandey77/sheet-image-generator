import * as htmlToImage from "html-to-image";
import { Download } from "lucide-react";
import type { Patient } from "../types/patient";
import { useRef } from "react";

type PatientCardProps = {
  patient: Patient;
};

export default function PatientCard({ patient }: PatientCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const fileName = patient.Name?.trim() || "patient";
  async function handleDownload() {
    if (!cardRef.current) {
      return;
    }
    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${fileName}.png`;
      link.click();
      link.remove();
    } catch (error) {
      console.error("Failed to generate patient image:", error);
    }
  }
  return (
    <div>
      <div
        ref={cardRef}
        className="max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {Object.entries(patient).map(([key, value]) => {
          if (key === "Name") {
            return (
              <h2 key={key} className="mb-4 text-2xl font-bold text-slate-800">
                {value}
              </h2>
            );
          } else {
            return (
              <div
                key={key}
                className="flex items-center justify-between border-b border-slate-100 py-2 last:border-none"
              >
                <span className="font-medium text-slate-500">{key}</span>
                <span className="text-slate-800">{value}</span>
              </div>
            );
          }
        })}
      </div>
      <div className="mt-3 flex justify-end">
        <button onClick={handleDownload} className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-md transition hover:bg-blue-700 active:scale-95">
          <Download size={18} />
          Download Image
        </button>
      </div>
    </div>
  );
}
