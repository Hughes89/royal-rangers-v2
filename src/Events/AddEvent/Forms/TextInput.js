import React  from 'react';

const TextInput = ({ name, label, value, valid, onChange, placeholder, help }) => (
    <div className="field">
        <label htmlFor={name} className="label">{label}</label>
        <div className="control">
            <input  
                className={valid ? 'input is-success' : 'input is-danger'}
                id={name}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                rows="4"
            />
        </div>
        <p className="help">{help}</p>
    </div>
)

export default TextInput;