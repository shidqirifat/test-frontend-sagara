import InputFirstName from "../moleculs/InputFirstName";
import InputLastName from "../moleculs/InputLastName";
import InputEmail from "../moleculs/InputEmail";
import InputPassword from "../moleculs/InputPassword";
import InputGender from "../moleculs/InputGender";
import InputProvince from "../moleculs/InputProvince";
import InputCity from "../moleculs/InputCity";
import Gap from "../atoms/Gap";
import Button from "../atoms/Button";

export default function CardSignUp() {
  return (
    <div className="w-max mx-auto p-8 bg-slate-700 rounded-md shadow-md flex flex-col gap-4">
      <InputFirstName />
      <InputLastName />
      <InputEmail />
      <InputPassword />
      <div className="flex gap-4 justify-between">
        <InputGender id="male" name="gender" required={true}>
          Laki-laki
        </InputGender>
        <InputGender id="female" name="gender">
          Perempuan
        </InputGender>
      </div>
      <InputProvince />
      <InputCity />
      <Button type="submit">Sign Up</Button>
    </div>
  );
}
