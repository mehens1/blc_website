import React from 'react';

const TextAreaInput = ({
  label,
  name,
  value = "",
  onChange = () => {},
  className = "",
  required = false,
  placeholder = ""
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label} {!required && <span className='text-gray-400'>(Optional)</span>}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || label}
        className="border w-full outline-none p-2 rounded"
        required={required}
      />
    </div>
  );
};

export default TextAreaInput;
