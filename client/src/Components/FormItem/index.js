import React from "react";
import { Form, Input, Col } from 'antd'
// import "./style.css"

function FormItem({ label, name, rules, span, type, value, onChange }) {
    return <Col span={span}>
        <Form.Item
            label={label}
            name={name}
            rules={rules}>
            <Input type={type} value={value} onChange={onChange} />
        </Form.Item>
    </Col>
}

export default FormItem;
