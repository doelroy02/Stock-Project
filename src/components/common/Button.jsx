// components/common/Button.js
import React from 'react';
// here is comment okkkkk
const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
