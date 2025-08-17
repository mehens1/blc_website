import React from "react";
import Button from "./button";

const FileUploadInput = ({
  label,
  name,
  file,
  setFormData,
  onChange,
  buttonText = "Upload",
  previewText = "Upload File",
  className = "",
  required = false
}) => {
  const inputId = `${name}Input`;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && <label className="block text-sm font-medium mb-3">{label} {!required && <span className='text-gray-400'>(Optional)</span>}</label>}

      <div className="flex items-center gap-4 relative">
        <span
          className="bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 cursor-pointer relative"
          style={{ width: "150px", height: "150px", overflow: "hidden" }}
          onClick={() => document.getElementById(inputId).click()}
        >
          {file ? (
            <>
              <img
                src={URL.createObjectURL(file)}
                alt={label}
                className="object-cover w-full h-full"
              />
              <button
                type="button"
                className="absolute top-1 right-1 text-white text-4xl font-bold hover:text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setFormData((prev) => ({ ...prev, [name]: null }));
                  document.getElementById(inputId).value = "";
                }}
              >
                &times;
              </button>
            </>
          ) : (
            previewText
          )}
        </span>

        <Button
          text={buttonText}
          type="button"
          onClick={() => document.getElementById(inputId).click()}
        />

        <input
          type="file"
          id={inputId}
          name={name}
          className="hidden"
          accept="image/*"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FileUploadInput;
