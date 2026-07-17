import { useState } from "react";
import PatientCard from "./PatientCard";

export default function PatientList(){
    const [patient,SetPatient]=useState();
    return(
        <div>
            <PatientCard key={patient.Name} patient={patient}
            />
        </div>
    )
}