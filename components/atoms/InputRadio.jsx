export default function InputRadio({
  value,
  handleChange,
  id,
  name,
  required,
}) {
  return (
    <input
      type="radio"
      id={id}
      name={name}
      required={required}
      value={id}
      checked={value === id}
      onChange={handleChange}
      className="w-4 h-4 outline-2 outline-offset-4 focus:outline-sky-600 cursor-pointer"
    />
  );
}
