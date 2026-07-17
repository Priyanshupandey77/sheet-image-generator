import type { Patient } from "../types/patient";

type PatientCardProps = {
  patient: Patient;
};

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <div>
      {Object.entries(patient).map(([key, value]) => (
        <p key={key}>
          <div>
            <strong>{key}:</strong>
            {value}
          </div>
        </p>
      ))}
    </div>
  );
}
