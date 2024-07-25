import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/GroupInput/Basic";
import InputFormPassword from "@/components/molecules/GroupInput/Password";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
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
        labelFor="Password"
        htmlFor="password"
        type="password"
        placeholder="password"
        defaultValue=""
        name="password"
        required={true}
      />
      <span className="mt-0 text-xs text-primary-300 underline">
        <Link href="/auth/forgot-password" className="undeline">
          Lupa Password
        </Link>
      </span>
      <Button className="mt-8 h-10 w-full rounded-lg bg-primary-300 text-sm font-semibold text-white">
        Masuk
      </Button>
    </form>
  );
};

export default LoginForm;
