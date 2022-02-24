import Label from "../atoms/Label";
import InputField from "../atoms/InputField";

export default function InputLastName() {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="lastName">Last Name</Label>
      <InputField
        type="text"
        name="lastName"
        placeholder="Insert your last name"
      />
    </div>
  );
}
