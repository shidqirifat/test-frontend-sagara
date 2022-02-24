import Label from "../atoms/Label";
import InputField from "../atoms/InputField";

export default function InputFirstName({ value, handleChange }) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="email">Email</Label>
      <InputField
        value={value}
        handleChange={handleChange}
        type="email"
        name="email"
        placeholder="Insert your email address"
      />
    </div>
  );
}
