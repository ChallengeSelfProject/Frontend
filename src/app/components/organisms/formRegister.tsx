import React from "react";
import InputForm from "../atoms_molecules/input";
import Button from "../atoms_molecules/buton";

const FormRegister = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-full">
      <InputForm
        labelFor="phoneNumber"
        htmlFor="phoneNumber"
        type="number"
        placeholder="+62"
        value=""
        name="phoneNumber"
        id="phoneNumber"
        required={true}
        autoComplete="phoneNumber"
      />
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
      <InputForm
        labelFor="Password"
        htmlFor="password"
        type="password"
        placeholder="selfproject123"
        value=""
        name="password"
        id="password"
        required={true}
        autoComplete="password"
      />
      <InputForm
        labelFor="Konfirmasi Password"
        htmlFor="confirmpassword"
        type="password"
        placeholder="********"
        value=""
        name="password"
        id="password"
        required={true}
        autoComplete="password"
      />
      <Button className="mt-8 h-10 text-sm font-semibold">Daftar</Button>
    </form>
  );
};

export default FormRegister;
