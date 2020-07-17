import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

function CollapsePanel({ header, key, children }) {

    return <Panel header={header} key={key}>
        {children}
    </Panel>
}

export default CollapsePanel;