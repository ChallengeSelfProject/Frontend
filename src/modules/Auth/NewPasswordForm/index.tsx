import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/GroupInput/Basic";
import InputFormPassword from "@/components/molecules/GroupInput/Password";
import Link from "next/link";

const NewPasswordForm = () => {
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
      <Button className="mt-8 h-10 w-full rounded-lg bg-primary-300 text-sm font-semibold text-white">
        Simpan
      </Button>
      <a href="/auth/login">To Login</a>
    </form>
  );
};

export default NewPasswordForm;
