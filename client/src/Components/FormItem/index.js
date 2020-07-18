import React from "react";

function FormItem({ label, type, onChange, placeholder }) {
    return <>
        <label className="label">{label}</label>
        <div className="control">
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    </>
}

export default FormItem;
