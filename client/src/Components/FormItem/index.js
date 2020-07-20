import React from "react";
import { Form, Input } from 'antd'

function FormItem({ label, type, onChange, placeholder }) {
    return <>
        <Form.Item label={label} name={label}>
            <Input type={type} onChange={onChange} />
        </Form.Item>
        {/* <label className="label">{label}</label>
        <div className="control">
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div> */}
    </>
}

export default FormItem;
