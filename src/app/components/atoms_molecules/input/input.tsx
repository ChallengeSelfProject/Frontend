type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  id: string;
  required: boolean;
  autoComplete: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  name,
  id,
  required,
  autoComplete,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      id={id}
      required={required}
      autoComplete={autoComplete}
      className="text-sm w-full p-2 border border-gray-400 rounded-lg py px-3 py-2"
    />
  );
};

export default Input;
