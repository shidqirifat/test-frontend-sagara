import Label from "../atoms/Label";
import InputField from "../atoms/InputField";

export default function InputFirstName({ value, handleChange }) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="firstName">First Name</Label>
      <InputField
        value={value}
        handleChange={handleChange}
        type="text"
        name="firstName"
        placeholder="Insert your first name"
      />
    </div>
  );
}
