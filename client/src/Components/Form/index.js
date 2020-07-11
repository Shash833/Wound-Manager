import React from "react";
import { Form, Button } from 'antd'

function Forms({ onClick, children }) {
    const layout = {
        labelCol: { span: 10 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    return <Form {...layout} style={{ width: '100%' }}>
        {children}

        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={onClick}>
                Submit
        </Button>
        </Form.Item>
    </Form>
}

export default Forms;
