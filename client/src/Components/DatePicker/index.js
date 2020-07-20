import React from "react";
import { Form, DatePicker } from 'antd';


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

function Date({ label, onChange }) {
    return <><Form.Item label={label}><DatePicker onChange={onChange} format={dateFormatList} /></Form.Item></>

}

export default Date;