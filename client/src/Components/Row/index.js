import React from "react";
import { Row } from 'antd'

function Rows({ children, align, gutter, justify }) {
    return <Row align={align} gutter={gutter} justify={justify}>
        {children}
    </Row>;
}

export default Rows;
