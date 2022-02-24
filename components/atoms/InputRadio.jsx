export default function InputRadio({ id, name, value, required }) {
  return (
    <input
      type="radio"
      id={id}
      name={name}
      required={required}
      value={value}
      className="w-4 h-4 outline-2 outline-offset-4 focus:outline-sky-600 cursor-pointer"
    />
  );
}
