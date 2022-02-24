import Label from "../atoms/Label";
import InputOption from "../atoms/InputOption";

export default function InputProvince() {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="province">Choose Province</Label>
      <InputOption
        name="province"
        values={["DKI Jakarta", "Jawa Barat"]}
        choose="Province"
      />
    </div>
  );
}
