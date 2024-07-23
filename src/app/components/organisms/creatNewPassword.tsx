import React from "react";
import InputForm from "../molecules/inputForm";
import InputFormPassword from "../molecules/inputFormPassword";
import Button from "../atoms/buton";

const FormCreateNewPassword = () => {
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
        labelFor="Password Lama"
        htmlFor="password_lama"
        type="password"
        placeholder="********"
        defaultValue=""
        name="password"
        required={true}
      />
      <InputFormPassword
        labelFor="Password Baru"
        htmlFor="password_baru"
        type="password"
        placeholder="********"
        defaultValue=""
        name="password"
        required={true}
      />
      <InputFormPassword
        labelFor="Konfirmasi Password Baru"
        htmlFor="konfirmasi_password_baru"
        type="password"
        placeholder="********"
        defaultValue=""
        name="password"
        required={true}
      />
      <Button className="mt-8 h-10 text-sm font-semibold">Simpan</Button>
    </form>
  );
};

export default FormCreateNewPassword;
