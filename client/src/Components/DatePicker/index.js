import React from "react";
import { DatePicker } from 'antd';


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

function Date({ label, onChange }) {
    return <><label className="label">{label}</label><DatePicker onChange={onChange} format={dateFormatList} /></>

}

export default Date;