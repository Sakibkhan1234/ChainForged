import React from 'react';
import '../styles/Button.css';

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <button className="app-button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
