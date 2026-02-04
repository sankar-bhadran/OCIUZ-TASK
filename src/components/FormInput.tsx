interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
  error?: string;
  readOnly?: boolean;
}

const FormInput = ({
  label,
  type = "text",
  placeholder,
  name,
  onChange,
  value,
  error,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`border rounded-md px-3 py-2 text-sm focus:outline-none
    ${error ? "border-red-500" : "border-gray-300"}`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default FormInput;
