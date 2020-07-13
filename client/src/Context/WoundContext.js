import React, { useState } from "react";

export const WoundContext = React.createContext();

export default function (props) {
    const [Wound, setWound] = useState(null);

    return <WoundContext.Provider value={{ Wound, setWound }} {...props} />
}
