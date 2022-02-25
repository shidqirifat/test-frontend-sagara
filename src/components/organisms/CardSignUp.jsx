import InputFirstName from "../moleculs/InputFirstName";
import InputLastName from "../moleculs/InputLastName";
import InputEmail from "../moleculs/InputEmail";
import InputPassword from "../moleculs/InputPassword";
import InputGender from "../moleculs/InputGender";
import InputProvince from "../moleculs/InputProvince";
import InputCity from "../moleculs/InputCity";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { saveLocalStorage } from "../../utils/storage-helper";
import { checkIsLogin } from "../../utils/auth-helper";
import { TitleCard } from "../atoms/Text";
import Gap from "../atoms/Gap";

export default function CardSignUp() {
  const router = useRouter();
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    province: "",
    city: "",
  });

  useEffect(() => {
    if (checkIsLogin()) router.back();
  }, []);

  function handleChange(e) {
    const { value, name } = e.target;

    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function isFormNotFull(form) {
    return Object.values(form).every((data) => data === "");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isFormNotFull(dataForm))
      alert("Please insert all the data before submit!");
    else {
      const success = saveLocalStorage(dataForm);
      if (!success)
        return alert("failed register an account, email has already added");

      router.push({
        pathname: "/login",
      });
    }
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="w-max mx-auto p-8 bg-slate-700 rounded-lg shadow-md flex flex-col gap-4"
    >
      <TitleCard>Register</TitleCard>
      <InputFirstName value={dataForm.firstName} handleChange={handleChange} />
      <InputLastName value={dataForm.lastName} handleChange={handleChange} />
      <InputEmail value={dataForm.email} handleChange={handleChange} />
      <InputPassword value={dataForm.password} handleChange={handleChange} />
      <div className="flex gap-4 justify-between">
        <InputGender
          value={dataForm.gender}
          handleChange={handleChange}
          id="male"
          name="gender"
          required={true}
        >
          Laki-laki
        </InputGender>
        <InputGender
          value={dataForm.gender}
          handleChange={handleChange}
          id="female"
          name="gender"
        >
          Perempuan
        </InputGender>
      </div>
      <InputProvince value={dataForm.province} handleChange={handleChange} />
      <InputCity value={dataForm.city} handleChange={handleChange} />
      <Gap height={10} />
      <Button type="submit">Register Account</Button>
    </form>
  );
}
