import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs({ navArray }) {

    return <div className="breadcrumb has-succeeds-separator is-small" aria-label="breadcrumbs">
        <ul>
            <li><Link to="/home">Home</Link></li>
            {navArray.map(({ label, link }) => (<li key={label}><Link className="link" to={link}>{label}</Link></li>))}
        </ul>
    </div>
}

export default Breadcrumbs