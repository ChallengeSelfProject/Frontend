import React from "react";
import InputForm from "../molecules/inputForm";
import Button from "../atoms/buton";

const FormForgotPassword = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-full">
      <InputForm
        labelFor="Email"
        htmlFor="email"
        type="email"
        placeholder="selfproject@gmail.com"
        defaultValue=""
        name="email"
        id="email"
        required={true}
        autoComplete="email"
      />
      <Button className="mt-8 h-10 text-sm font-semibold">Verifikasi</Button>
    </form>
  );
};

export default FormForgotPassword;
