import React from 'react'
import { Form, Input } from 'antd';

const { TextArea } = Input;


function Text({ label, type, onChange }) {
    return <>
        <Form.Item label={label} name={label}>
            <TextArea rows={4} type={type} onChange={onChange} />
        </Form.Item>
    </>
}

export default Text;
