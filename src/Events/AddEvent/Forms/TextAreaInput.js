import React  from 'react';

const TextAreaInput = ({ name, label, value, valid, onChange, placeholder, help }) => (
    <div className="field">
        <label htmlFor={name} className="label">{label}</label>
        <div className="control">
            <textarea  
                className={valid ? 'textarea is-success' : 'textarea is-danger'}
                id={name}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                rows="3"
            />
        </div>
        <p className="help">{help}</p>
    </div>
)

export default TextAreaInput;