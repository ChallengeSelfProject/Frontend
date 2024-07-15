import React, { FC } from "react";
import Label from "./label";
import InputPassword from "./inputPassword";

type InputFormPasswordProps = {
  labelFor: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  // id: string;
  required: boolean;
  // autoComplete: string;
};

const InputFormPassword: React.FC<InputFormPasswordProps> = ({
  labelFor,
  htmlFor,
  type,
  placeholder,
  value,
  name,
  // id,
  required,
  // autoComplete,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{labelFor}</Label>
      <InputPassword
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        // id={id}
        required={required}
        // autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputFormPassword;
