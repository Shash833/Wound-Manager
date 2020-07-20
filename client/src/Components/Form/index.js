import React from "react";
import { Form } from 'antd'


function Forms({ children }) {

    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    return <Form {...layout} className="field">{children}</Form>
}
export default Forms;
