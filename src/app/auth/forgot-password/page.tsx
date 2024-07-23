import React from "react";
import Image from "next/image";
import AuthTemplate from "@/components/template/Auth";
import InputForm from "@/components/molecules/GroupInput/Basic";
import Button from "@/components/atoms/Button";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex max-w-screen-2xl flex-1 justify-center bg-global">
        <div className="flex w-4/5 flex-col py-6 sm:w-11/12 sm:p-16 md:w-10/12 lg:mt-36 lg:w-1/2 xl:w-6/12">
          <AuthTemplate>
            <p className="mb-3 mt-6 text-start text-sm text-gray-400">
              Masukkan email kamu untuk mengirimkan kode verifikasi lupa password
            </p>
            <form action="" className="flex w-full flex-col gap-2">
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
          </AuthTemplate>
        </div>

        <div className="hidden flex-1 lg:flex">
          <div
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/login.png')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
