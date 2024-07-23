"use client"; // Add this line at the top

import React, { useState } from "react";

type InputPasswordProps = {
  placeholder: string;
  defaultValue: string;
  name: string;
  required: boolean;
};

const InputPassword: React.FC<InputPasswordProps> = ({
  placeholder,
  defaultValue,
  name,
  required,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        id="hs-toggle-password"
        required={required}
        className="text-sm w-full p-2 border border-gray-400 rounded-lg py px-3 py-2"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute top-0 right-0 p-3.5 rounded-e-md"
      >
        <svg
          className={`flex-shrink-0 size-3.5 ${
            isPasswordVisible ? "text-gray-600" : "text-gray-400"
          }`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isPasswordVisible ? (
            <>
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </>
          ) : (
            <>
              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
              <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
              <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
              <line x1="2" x2="22" y1="2" y2="22"></line>
            </>
          )}
        </svg>
      </button>
    </div>
  );
};

export default InputPassword;
