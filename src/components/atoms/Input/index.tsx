type InputProps = {
  type: string;
  placeholder: string;
  defaultValue: string;
  name: string;
  id: string;
  required: boolean;
  autoComplete: string;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  defaultValue,
  name,
  id,
  required,
  autoComplete,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      name={name}
      id={id}
      required={required}
      autoComplete={autoComplete}
      className="text-sm w-full p-2 border border-gray-400 rounded-lg py px-3 py-2"
    />
  );
};

export default Input;
