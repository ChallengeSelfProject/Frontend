import React from "react";
import InputForm from "../atoms_molecules/input";
import Button from "../atoms_molecules/buton";

const FormForgotPassword = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-full">
      <InputForm
        labelFor="Email"
        htmlFor="email"
        type="email"
        placeholder="selfproject@gmail.com"
        value=""
        name="email"
        id="email"
        required={true}
        // autoComplete="email"
      />
      <Button className="mt-8 h-10 text-sm font-semibold">Verifikasi</Button>
    </form>
  );
};

export default FormForgotPassword;
