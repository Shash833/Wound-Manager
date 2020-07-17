import React from "react";
import { Row } from 'antd'

function Rows({ children, align, gutter, justify, className, style }) {
    return <Row align={align} gutter={gutter} justify={justify} className={className} style={style}>
        {children}
    </Row>;
}

export default Rows;
