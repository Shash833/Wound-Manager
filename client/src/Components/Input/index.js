import React from "react";
import { Input } from 'antd'

function TextInput({ children }) {
    return <Input style={{ width: '100%' }}>
        {children}
    </Input>;
}


export default TextInput;
