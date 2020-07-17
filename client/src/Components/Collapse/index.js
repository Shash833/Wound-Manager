import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

function CollapseCard({ children }) {

    function callback(key) {
        console.log(key);
    }

    return <Collapse defaultActiveKey={['1']} onChange={callback} style={{ width: "100 %" }}>
        {children}
    </Collapse>


    // <Collapse defaultActiveKey={['1']} >
    //     {children}
    // </Collapse>
}

export default CollapseCard;