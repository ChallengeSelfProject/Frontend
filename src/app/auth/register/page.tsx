import React from "react";
import AuthTemplate from "@/components/template/Auth";
import InputFormPassword from "@/components/molecules/GroupInput/Password";
import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/GroupInput/Basic";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex max-w-screen-2xl flex-1 justify-center bg-global">
        <div className="flex w-4/5 flex-col py-6 sm:w-11/12 sm:p-16 md:w-10/12 lg:w-1/2 lg:justify-center xl:w-6/12">
          <AuthTemplate>
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
              <Button className="mt-8 h-10 text-sm font-semibold">Daftar</Button>
            </form>
          </AuthTemplate>
          <div className="flex items-center py-6 text-xs text-gray-400 before:me-2 before:flex-1 before:border-t before:border-gray-400 after:ms-2 after:flex-1 after:border-t after:border-gray-400">
            atau
          </div>

          <button className="border-slate-200 flex w-full justify-center gap-2 rounded-lg border border-primary-300 px-4 py-2 text-sm font-semibold text-primary-300">
            <img
              className="h-6 w-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Daftar dengan Google</span>
          </button>
          <p className="mt-36 text-center text-sm font-medium lg:mt-24">
            Sudah Punya akun?
            <a href="/pages/login" className="text-sm font-medium text-primary-300">
              {" "}
              Log in
            </a>
          </p>
        </div>

        <div className="hidden flex-1 lg:flex">
          <div className="aspect-h-9 aspect-w-16 w-full">
            <div
              className="w-full bg-auto bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/assets/register.png')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
