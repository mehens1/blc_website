import React from 'react';

const Button = ({ text, type = "submit", className = "", bgClass, onClick  }) => {
  return (
    <button
    type={type}
    onClick={onClick }
    className={`px-4 py-2 rounded text-white text-sm transition-colors duration-300 ${className} ${bgClass ?? "secondary-bg"}`}>
      {text}
    </button>
  );
};

export default Button;