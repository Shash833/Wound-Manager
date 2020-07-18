import React from "react";

function Column({ children, size }) {
    return <div className={`column ${size}`}>
        {children}
    </div>
}

export default Column;
