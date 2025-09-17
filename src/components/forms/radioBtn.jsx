import React from 'react';

const RadioInput = ({ label, name, options, selectedValue, onChange, required = false }) => {
  return (
    <div className="mb-4">
      {label && (
        <p className="font-medium mb-2">
          {label} {!required && <span className='text-gray-400'>(Optional)</span>}
        </p>
      )}

      {options.map((option, index) => {
        // ✅ handle both string and object options
        const value = typeof option === "object" ? option.value : option;
        const displayLabel = typeof option === "object" ? option.label : option;

        const isOther = displayLabel === "Other";

        return (
          <label key={index} className="flex items-center space-x-2 mb-1">
            <input
              type="radio"
              name={name}
              value={value}
              checked={
                isOther
                  ? !options.some(opt =>
                      typeof opt === "object"
                        ? opt.value === selectedValue
                        : opt === selectedValue
                    )
                  : String(selectedValue) === String(value)
              }
              onChange={(e) => {
                if (isOther) {
                  onChange({ target: { name, value: "" } });
                } else {
                  onChange(e);
                }
              }}
              required={required}
            />
            <span>{displayLabel}</span>

            {/* If "Other" is selected, show text input */}
            {isOther &&
              !options.some(opt =>
                typeof opt === "object"
                  ? opt.value === selectedValue
                  : opt === selectedValue
              ) && (
                <input
                  type="text"
                  className="border p-1 rounded ml-2"
                  placeholder="Please specify"
                  value={selectedValue}
                  onChange={(e) =>
                    onChange({
                      target: { name, value: e.target.value },
                    })
                  }
                  required
                />
              )}
          </label>
        );
      })}
    </div>
  );
};

export default RadioInput;
