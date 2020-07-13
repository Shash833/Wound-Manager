import React, { useState } from "react";

export const PatientContext = React.createContext();

export default function (props) {
    const [patient, setPatient] = useState(null);

    return <PatientContext.Provider value={{ patient, setPatient }} {...props} />
}
