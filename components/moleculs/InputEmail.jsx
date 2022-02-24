import Label from "../atoms/Label";
import InputField from "../atoms/InputField";

export default function InputFirstName() {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="email">Email</Label>
      <InputField
        type="email"
        name="email"
        placeholder="Insert your email address"
      />
    </div>
  );
}
