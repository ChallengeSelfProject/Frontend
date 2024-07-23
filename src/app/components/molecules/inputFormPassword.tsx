import React from "react";
import Label from "../atoms/label";
import InputPassword from "../atoms/inputPassword";

type InputFormPasswordProps = {
  labelFor: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  defaultValue: string;
  name: string;
  required: boolean;
};

const InputFormPassword: React.FC<InputFormPasswordProps> = ({
  labelFor,
  htmlFor,
  type,
  placeholder,
  defaultValue,
  name,
  required,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{labelFor}</Label>
      <InputPassword
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        required={required}
      />
    </div>
  );
};

export default InputFormPassword;
