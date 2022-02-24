export default function InputOption({
  value,
  handleChange,
  name,
  values,
  choose,
  required = true,
}) {
  const OptionElement = values.map((value, index) => (
    <option key={index} value={value} className="text-sm">
      {value}
    </option>
  ));

  return (
    <>
      <select
        id={name}
        name={name}
        className="p-2 text-lg text-slate-700 rounded-md"
        value={value}
        onChange={handleChange}
        required={required}
      >
        <option value="" className="text-sm">
          -- Choose {choose} --
        </option>
        {OptionElement}
      </select>
    </>
  );
}
