import Label from "../atoms/Label";
import InputOption from "../atoms/InputOption";

export default function InputProvince({ value, handleChange }) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="province">Choose City</Label>
      <InputOption
        value={value}
        handleChange={handleChange}
        name="city"
        values={[
          "Jakarta Pusat",
          "Jakarta Selatan",
          "Jakarta Barat",
          "Bandung",
          "Depok",
        ]}
        choose="City"
      />
    </div>
  );
}
