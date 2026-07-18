import PatientCard from "./PatientCard";
import type { Patient } from "../types/patient";
type PatientListProps = {
  patients: Patient[];
};

export default function PatientList({ patients }: PatientListProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {patients.map((patient) => (
        <PatientCard key={patient.Name} patient={patient} />
      ))}
    </div>
  );
}
