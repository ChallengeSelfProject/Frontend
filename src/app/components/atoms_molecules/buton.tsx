import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`bg-primary-300 w-full rounded-lg text-white text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
