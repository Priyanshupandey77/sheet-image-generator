import PatientCard from "./PatientCard";
import type { Patient } from "../types/patient";
type PatientListProps = {
  patients: Patient[];
};

export default function PatientList({ patients }: PatientListProps) {
  return (
    <div>
      {patients.map((patient) => (
        <PatientCard key={patient.Name} patient={patient} />
      ))}
    </div>
  );
}
