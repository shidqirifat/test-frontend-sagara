import Label from "../atoms/Label";
import InputField from "../atoms/InputField";

export default function InputPassword() {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="password">Password</Label>
      <InputField
        type="password"
        name="password"
        placeholder="Insert your password"
      />
    </div>
  );
}
