import type { Patient } from "../types/patient";

type PatientCardProps = {
  patient: Patient;
};

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
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
              <span className="text-slate-800">{(value)}</span>
            </div>
          );
        }
      })}
    </div>
  );
}
