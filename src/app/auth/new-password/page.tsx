import React from "react";
import AuthTemplate from "@components/template/Auth";
import NewPasswordForm from "@/modules/Auth/NewPasswordForm";

const NewPasswordPage = () => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex max-w-screen-2xl flex-1 justify-center bg-global">
        <div className="flex w-4/5 flex-col py-6 sm:w-11/12 sm:p-16 md:w-10/12 lg:w-1/2 lg:justify-center xl:w-6/12">
          <AuthTemplate>
            <NewPasswordForm />
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

export default NewPasswordPage;
