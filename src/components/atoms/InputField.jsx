export default function InputField({
  value,
  handleChange,
  type,
  name,
  placeholder,
  required = true,
}) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="w-full py-2 px-3 shadow appearance-none rounded text-gray-700 leading-tight border-[3px] outline-4 outline-offset-4 focus:outline-sky-600 focus:shadow-outline  invalid:outline-none invalid:border-red-500 text-lg"
      required={required}
    />
  );
}
