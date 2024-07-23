import React, { FC } from "react";
import Input from "../atoms/input";
import Label from "../atoms/label";

type InputFormProps = {
  labelFor: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  defaultValue: string;
  name: string;
  id: string;
  required: boolean;
  autoComplete: string;
};

const InputForm: React.FC<InputFormProps> = ({
  labelFor,
  htmlFor,
  type,
  placeholder,
  defaultValue,
  name,
  id,
  required,
  autoComplete,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{labelFor}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        id={id}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputForm;
