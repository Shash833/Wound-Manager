import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'antd'

function Buttons({ onClick, children, link }) {
    return <Button type="primary" onClick={onClick}><Link to={link}>{children}</Link></Button>;
}


export default Buttons;
