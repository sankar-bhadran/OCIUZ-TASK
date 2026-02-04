interface FormTextAreaProps {
  label: string;
  placeholder?: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
}

const FormTextArea = ({
  label,
  placeholder,
  name,
  onChange,
  error,
}: FormTextAreaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={4}
        name={name}
        onChange={onChange}
        className={`border rounded-md px-3 py-2 text-sm focus:outline-none
    ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default FormTextArea;
