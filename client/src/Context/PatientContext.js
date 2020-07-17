import React, { useState, useContext } from "react";

export const PatientContext = React.createContext();

export default function (props) {
    const [patient, setPatient] = useState(null);

    return <PatientContext.Provider value={{ patient, setPatient }} {...props} />
}

export function patientContext() {
    return useContext(PatientContext)
}