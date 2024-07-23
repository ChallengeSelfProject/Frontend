import React from "react";
import InputForm from "../molecules/inputForm";
import Button from "../atoms/buton";
import InputFormPassword from "../molecules/inputFormPassword";

const FormLogin = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-full">
      <InputForm
        labelFor="Email"
        htmlFor="email"
        type="email"
        placeholder="email"
        defaultValue=""
        name="email"
        id="email"
        required={true}
        autoComplete="email"
      />
      <InputFormPassword
        labelFor="Password"
        htmlFor="password"
        type="password"
        placeholder="password"
        defaultValue=""
        name="password"
        required={true}
      />
      <a
        href="../../pages/forgotPassword"
        className="text-xs underline text-primary-300 mt-0"
      >
        Lupa Password
      </a>
      <Button className="mt-8 h-10 text-sm font-semibold">Masuk</Button>
    </form>
  );
};

export default FormLogin;
