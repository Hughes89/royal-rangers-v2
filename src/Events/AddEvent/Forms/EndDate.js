import React from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const EndDate = ({ name, label, value, valid, onChange, placeholder, help, startDate }) => {
    return (
        <div className="field">
            <label htmlFor={name} className="label">{label}</label>
            <div className="control">
                <DatePicker 
                    className={valid ? 'input is-success' : 'input is-danger'}
                    placeholderText={placeholder}
                    onChange={e => onChange(e, 'endDate')}
                    startDate={startDate}
                    endDate={value}
                    minDate={startDate}
                    selected={value}
                    id={'endDate'}
                    name={'endDate'}
                    dateFormat={'MM/DD/YYYY'} />
            </div>
            <p className="help">{help}</p>
        </div>
    )
};

export default EndDate;