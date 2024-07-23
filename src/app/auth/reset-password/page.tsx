import React from "react";
import AuthTemplate from "@components/template/Auth";
import InputFormPassword from "@/components/molecules/GroupInput/Password";
import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/GroupInput/Basic";

const CreatenewPasswordPage = () => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex max-w-screen-2xl flex-1 justify-center bg-global">
        <div className="flex w-4/5 flex-col py-6 sm:w-11/12 sm:p-16 md:w-10/12 lg:w-1/2 lg:justify-center xl:w-6/12">
          <AuthTemplate>
            <form action="" className="flex w-full flex-col gap-2">
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
          </AuthTemplate>
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

export default CreatenewPasswordPage;
