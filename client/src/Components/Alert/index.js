import React from 'react'
import { Alert } from 'antd'

function Alerts({ title, children }) {
    return <Alert
        message={title}
        description={children}
        type="info"
    />
}

export default Alerts