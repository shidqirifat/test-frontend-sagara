import Label from "../atoms/Label";
import InputField from "../atoms/InputField";

export default function InputPassword({ value, handleChange }) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="password">Password</Label>
      <InputField
        value={value}
        handleChange={handleChange}
        type="password"
        name="password"
        placeholder="Insert your password"
      />
    </div>
  );
}
