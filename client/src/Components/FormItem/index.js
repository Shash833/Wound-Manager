import React from "react";
import { Form, Input } from 'antd'

function FormItem({ label, type, onChange }) {
    return <>
        <Form.Item label={label} name={label}>
            <Input type={type} onChange={onChange} />
        </Form.Item>
    </>
}

export default FormItem;
