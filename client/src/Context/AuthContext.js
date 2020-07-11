import React, { useState } from "react";

export const UserContext = React.createContext();

export default function (props) {
    const [user, setUser] = useState(null);

    return <UserContext.Provider value={{ user, setUser }} {...props} />
}
