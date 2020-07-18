import React from "react";
import { Select } from 'antd';

const { Option } = Select;


//use onChange={"function"} to select value
function Dropdown({ label, array, onClick }) {
  return <>
    <label className="label">{label}</label>
    <Select title={"Select Title"} style={{ width: 120 }} onChange={onClick}>
      {array.map((list) => (<Option key={list} value={list}>{list}</Option>))}
    </Select></>

}

export default Dropdown;