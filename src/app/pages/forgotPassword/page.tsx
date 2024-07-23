import React from "react";
import Image from "next/image";
import AuthTemplate from "@/app/components/template/authTemplate";
import FormForgotPassword from "@/app/components/organisms/formForgotPassword";

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-screen-2xl flex justify-center flex-1 bg-global">
        <div className="flex flex-col w-4/5 py-6 sm:w-11/12 md:w-10/12 lg:w-1/2 xl:w-6/12 sm:p-16 lg:mt-36">
          <AuthTemplate>
            <p className="text-gray-400 text-sm text-start mt-6 mb-3">
              Masukkan email kamu untuk mengirimkan kode verifikasi lupa
              password
            </p>
            <FormForgotPassword />
          </AuthTemplate>
        </div>

        <div className="flex-1 hidden lg:flex">
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
