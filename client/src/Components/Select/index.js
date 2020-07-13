import React from "react";
import { Select, Form } from 'antd';

const { Option } = Select;


//use onChange={"function"} to select value
function Dropdown({ label }) {
    return <Form.Item label={label}>
        <Select title={"Select Title"} defaultValue={label} style={{ width: 120 }} >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled">Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select></Form.Item>

}

export default Dropdown;


{/* <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
<Select
  placeholder="Select a option and change input text above"
  onChange={onGenderChange}
  allowClear
>
  <Option value="male">male</Option>
  <Option value="female">female</Option>
  <Option value="other">other</Option>
</Select>
</Form.Item> */}