import React from 'react';

import DatePicker from "react-datepicker";

const StartDate = ({ name, label, value, valid, onChange, placeholder, help, endDate }) => {
    return (
        <div className="field">
            <label htmlFor={name} className="label">{label}</label>
            <div className="control">
                <DatePicker 
                    className={valid ? 'input is-success' : 'input is-danger'}
                    placeholderText={placeholder}
                    onChange={e => onChange(e, 'startDate')}
                    startDate={value}
                    endDate={endDate}
                    maxDate={endDate}
                    selected={value}
                    id={'startDate'}
                    name={'startDate'}
                    dateFormat={'MM/DD/YYYY'} />
            </div>
            <p className="help">{help}</p>
        </div>
    )
};

export default StartDate;