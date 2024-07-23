import React from "react";
import AuthTemplate from "@/app/components/template/authTemplate";
import FormRegister from "@/app/components/organisms/formRegister";

const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-screen-2xl flex justify-center flex-1 bg-global">
        <div className="flex flex-col w-4/5 py-6 sm:w-11/12 md:w-10/12 lg:w-1/2 xl:w-6/12 sm:p-16 lg:justify-center">
          <AuthTemplate>
            <FormRegister />
          </AuthTemplate>
          <div className="py-6 flex items-center text-xs text-gray-400  before:flex-1 before:border-t before:border-gray-400 before:me-2 after:flex-1 after:border-t after:border-gray-400 after:ms-2">
            atau
          </div>

          <button className="w-full px-4 py-2 border flex justify-center gap-2 border-slate-200 rounded-lg text-primary-300 font-semibold text-sm border-primary-300">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Daftar dengan Google</span>
          </button>
          <p className="text-sm font-medium text-center mt-36 lg:mt-24">
            Sudah Punya akun?
            <a
              href="/pages/login"
              className="text-primary-300 text-sm font-medium"
            >
              {" "}
              Log in
            </a>
          </p>
        </div>

        <div className="flex-1 hidden lg:flex">
          <div className="w-full aspect-w-16 aspect-h-9">
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
