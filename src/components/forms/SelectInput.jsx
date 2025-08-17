import React from 'react';

const SelectInput = ({
  label,
  name,
  value = "",
  onChange = () => {},
  className = "",
  required = false,
  options = []
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label} {required ?  <span className="text-red-500">*</span> : <span className='text-gray-400'>(Optional)</span>}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border w-full outline-none p-2 rounded"
      >
        <option value="" disabled>
          {label || name}
        </option>
        {options.map((option, index) => {
          if (typeof option === "string") {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          }
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
