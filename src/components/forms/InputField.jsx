import React from 'react';

const InputField = ({
  label,
  name,
  type = "text",
  value = "",
  onChange = () => {},
  className = "",
  required = false
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label} {!required ? <span className='text-gray-400'>(Optional)</span> : <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        required= {required}
        type={type}
        placeholder={label}  // Placeholder automatically matches the label
        value={value}
        onChange={onChange}
        className={`border w-full outline-none p-2 rounded ${className}`}
      />
    </div>
  );
};

export default InputField;
