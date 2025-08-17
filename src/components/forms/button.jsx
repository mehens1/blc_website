import React from 'react';

const Button = ({ text, type = "submit", className = "", onClick  }) => {
  return (
    <button
    type={type}
    onClick={onClick }
    className={`secondary-bg hover:bg-white hover:text-red-600 border border-red-600 px-4 py-2 rounded text-white text-sm transition-colors duration-300 ${className}`}>
      {text}
    </button>
  );
};

export default Button;