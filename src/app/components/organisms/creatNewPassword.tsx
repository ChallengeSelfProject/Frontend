import React from "react";
import InputForm from "../atoms_molecules/input";
import Button from "../atoms_molecules/buton";

const FormCreateNewPassword = () => {
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
        autoComplete="email"
      />
      <InputForm
        labelFor="Password Lama"
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
        labelFor="Password Baru"
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
        labelFor="Konfirmasi Password Baru"
        htmlFor="confirmpassword"
        type="password"
        placeholder="********"
        value=""
        name="password"
        id="password"
        required={true}
        autoComplete="password"
      />
      <Button className="mt-8 h-10 text-sm font-semibold">Simpan</Button>
    </form>
  );
};

export default FormCreateNewPassword;
