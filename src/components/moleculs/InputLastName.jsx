import Label from "../atoms/Label";
import InputField from "../atoms/InputField";

export default function InputLastName({ value, handleChange }) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="lastName">Last Name</Label>
      <InputField
        value={value}
        handleChange={handleChange}
        type="text"
        name="lastName"
        placeholder="Insert your last name"
      />
    </div>
  );
}
