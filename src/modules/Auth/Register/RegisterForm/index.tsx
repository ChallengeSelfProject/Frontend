import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/GroupInput/Basic";
import InputFormPassword from "@/components/molecules/GroupInput/Password";
import React from "react";

const RegisterForm = () => {
  return (
    <form action="" className="flex w-full flex-col gap-2">
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
      <Button className="mt-8 h-10 w-full rounded-lg bg-primary-300 text-sm font-semibold text-white">
        Daftar
      </Button>
    </form>
  );
};

export default RegisterForm;
