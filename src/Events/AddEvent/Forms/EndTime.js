import React from 'react';

import DatePicker from "react-datepicker";


const EndTime = ({ name, label, value, valid, onChange, placeholder, help, startTime }) => {
    return (
        <div className="field">
            <label htmlFor={name} className="label">{label}</label>
            <div className="control">
            <DatePicker
                selected={value}
                className={valid ? 'input is-success' : 'input is-danger'}
                placeholderText={placeholder}
                onChange={e => onChange(e, 'endTime')}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="LT"
                timeCaption="Time" />
            </div>
            <p className="help">{help}</p>
        </div>
    )
};

export default EndTime;