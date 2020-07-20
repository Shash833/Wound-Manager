import React from "react";
import { Form, Select } from 'antd';

const { Option } = Select;


//use onChange={"function"} to select value
function Dropdown({ label, array, onClick }) {
  return <>
    <Form.Item label={label}>
      <Select title={"Select Title"} onChange={onClick}>
        {array.map((list) => (<Option key={list} value={list}>{list}</Option>))}
      </Select>
    </Form.Item></>


}

export default Dropdown;