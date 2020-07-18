import React from "react";
import { Link } from 'react-router-dom'

function Buttons({ onClick, children, link }) {
    return <button className="button is-info allButtons" onClick={onClick}><Link className="link" to={link}>{children}</Link></button>
}

export default Buttons;
