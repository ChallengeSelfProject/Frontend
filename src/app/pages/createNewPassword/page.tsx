import React from "react";
import AuthTemplate from "@/app/components/template/authTemplate";
import FormRegister from "@/app/components/organisms/formRegister";
import FormCreateNewPassword from "@/app/components/organisms/creatNewPassword";

const CreatenewPasswordPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-screen-2xl flex justify-center flex-1 bg-global">
        <div className="flex flex-col w-4/5 py-6 sm:w-11/12 md:w-10/12 lg:w-1/2 xl:w-6/12 sm:p-16 lg:justify-center">
          <AuthTemplate>
            <FormCreateNewPassword />
          </AuthTemplate>
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

export default CreatenewPasswordPage;
