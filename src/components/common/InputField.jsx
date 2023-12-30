import React from 'react';
// components/common/InputField.js

//Ok


const InputField = ({ type, placeholder, value, onChange, required }) => {
  return (
    //
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    />
  );
};

export default InputField;
