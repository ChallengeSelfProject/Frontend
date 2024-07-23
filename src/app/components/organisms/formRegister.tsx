import React from "react";
import InputForm from "../molecules/inputForm";
import InputFormPassword from "../molecules/inputFormPassword";
import Button from "../atoms/buton";

const FormRegister = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-full">
      <InputForm
        labelFor="Nomor Ponsel"
        htmlFor="nomorponsel"
        type="number"
        placeholder="+62"
        defaultValue=""
        name="nomor_ponsel"
        id="nomor_ponsel"
        required={true}
        autoComplete="nomorponsel"
      />
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
        placeholder="selfproject123"
        defaultValue=""
        name="password"
        required={true}
      />
      <InputFormPassword
        labelFor="Konfirmasi Password"
        htmlFor="confirmpassword"
        type="password"
        placeholder="********"
        defaultValue=""
        name="password"
        required={true}
      />
      <Button className="mt-8 h-10 text-sm font-semibold">Daftar</Button>
    </form>
  );
};

export default FormRegister;
