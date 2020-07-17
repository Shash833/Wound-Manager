import React from "react";
import { DatePicker, Form } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

function Date({ label, onChange }) {
    return <Form.Item label={label}><DatePicker onChange={onChange} format={dateFormatList} /></Form.Item>

}

export default Date;