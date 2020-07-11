import React from "react";
import { Card } from 'antd';

function Cards({ children, width, title }) {
    return <Card
        style={{ width: '100%' }}
        title={title}
    >{children}</Card>
}
export default Cards;