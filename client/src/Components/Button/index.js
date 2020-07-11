import React from "react";
import { Button } from 'antd'

function Buttons({ onClick, children, href }) {
    return <Button href={href} type="primary" onClick={onClick}>{children}</Button>;
}


export default Buttons;
