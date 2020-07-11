import React from "react";
import { Button } from 'antd'

function Buttons({ onClick, children }) {
    return <Button type="primary" onClick={onClick}>{children}</Button>;
}


export default Buttons;
