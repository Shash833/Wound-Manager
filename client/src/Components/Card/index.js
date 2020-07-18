import React from "react";

function Cards({ title, children, id }) {
    return <div className="card" id={id}>
        <p className="title is-4">{title}</p>
        {children}
    </div>
}
export default Cards;