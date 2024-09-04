import React from 'react';
import '../styles/InputField.css';

const InputField = ({ label, value, onChange, type = 'text', placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;
