import { Field, ErrorMessage } from "formik";

interface Input {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({
  name,
  label,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label className="mb-2 font-semibold" htmlFor={name}>
        {label}
      </label>
      <div className="flex relative">
        <Field
          type={type}
          id={name}
          name={name}
          autoComplete="off"
          className="w-full p-4 rounded-2xl border-2 border-black placeholder:text-brand-gray-400 font-medium"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-sm text-red-500"
      />
    </div>
  );
};

export default Input;
