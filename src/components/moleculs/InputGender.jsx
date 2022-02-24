import Label from "../atoms/Label";
import InputRadio from "../atoms/InputRadio";

export default function InputGender({
  value,
  handleChange,
  id,
  name,
  children,
  required = false,
}) {
  return (
    <div className="flex gap-1 items-center py-2 px-4 rounded-md bg-slate-600">
      <InputRadio
        value={value}
        handleChange={handleChange}
        id={id}
        name={name}
        required={required}
      />
      <Label htmlFor={id}>{children}</Label>
    </div>
  );
}
