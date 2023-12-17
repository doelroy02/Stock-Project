// components/common/InputField.js
import React from 'react';

const InputField = ({ type, placeholder, value, onChange, required }) => {
  return (
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
