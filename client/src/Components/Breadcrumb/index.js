import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';


function Breadcrumbs({ navArray }) {

    return <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
        {navArray.map(({ label, link }) => (
            <Breadcrumb.Item key={label}>
                <Link to={link}>{label}</Link>
            </Breadcrumb.Item>
        ))}
    </Breadcrumb>
}

export default Breadcrumbs