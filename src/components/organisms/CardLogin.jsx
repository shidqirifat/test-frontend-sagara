import InputEmail from "../moleculs/InputEmail";
import InputPassword from "../moleculs/InputPassword";
import Button from "../atoms/Button";
import { useState } from "react";
import { authLogin } from "../../utils/auth-helper";
import { useRouter } from "next/router";

export default function CardSignUp() {
  const router = useRouter();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

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
      const success = authLogin(dataForm);
      if (!success) return alert("Email and password did not match");

      router.push({
        pathname: "/home",
      });
    }
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="w-max mx-auto p-8 bg-slate-700 rounded-md shadow-md flex flex-col gap-4"
    >
      <InputEmail value={dataForm.email} handleChange={handleChange} />
      <InputPassword value={dataForm.password} handleChange={handleChange} />
      <Button type="submit">Login</Button>
    </form>
  );
}
