import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/GroupInput/Basic";
import Link from "next/link";

const ForgotPasswordForm = () => {
  return (
    <>
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
        <Button className="mt-8 h-10 w-full rounded-lg bg-primary-300 text-sm font-semibold text-white">
          Verifikasi
        </Button>
      </form>
      <Link href="/auth/new-password" className="">
        To New Password
      </Link>
    </>
  );
};

export default ForgotPasswordForm;
