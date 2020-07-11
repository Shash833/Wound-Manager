import React from "react";
import { Col } from 'antd'

function Column({ children, span, className, offset }) {
    return <Col className={className} span={span} offset={offset}>
        {children}
    </Col>
}

export default Column;
