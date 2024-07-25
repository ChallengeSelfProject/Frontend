import React from "react";

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm text-gray-700 font-medium">
      {children}
    </label>
  );
};

export default Label;
