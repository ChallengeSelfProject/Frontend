import React from "react";
import InputForm from "../atoms_molecules/input";
import Button from "../atoms_molecules/buton";
import InputFormPassword from "../atoms_molecules/input/indexPassword";

const FormLogin = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-full">
      <InputForm
        labelFor="Email"
        htmlFor="email"
        type="email"
        placeholder="email"
        value=""
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
        value=""
        name="password"
        // id="password"
        required={true}
        // autoComplete="password"
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
