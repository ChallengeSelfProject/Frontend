import React from "react";
import Image from "next/image";

type AuthTemplateProps = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className="mt-8 flex w-full flex-col items-center">
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
