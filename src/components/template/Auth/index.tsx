import React from "react";
import Image from "next/image";

type AuthTemplateProps = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full mt-8">
      <Image
        src="/assets/logo.png"
        alt="SelfProject Logo"
        width={100}
        height={24}
        className="mb-6"
      />
      {children}
    </div>
  );
};

export default AuthTemplate;
