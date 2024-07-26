import AuthTemplate from "@/components/template/Auth";
import LoginForm from "./LoginForm";
import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/GroupInput/Basic";
import InputFormPassword from "@/components/molecules/GroupInput/Password";
import Link from "next/link";

const Login = () => {
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
          </AuthTemplate>
          <div className="flex items-center py-6 text-xs text-gray-400 before:me-2 before:flex-1 before:border-t before:border-gray-400 after:ms-2 after:flex-1 after:border-t after:border-gray-400">
            atau
          </div>

          <Button className="border-slate-200 mt-6 flex w-full justify-center gap-2 rounded-lg border border-primary-300 px-4 py-2 text-sm font-semibold text-primary-300">
            <img
              className="h-6 w-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Masuk dengan Google</span>
          </Button>
          <p className="mt-36 text-center text-sm font-medium lg:mt-24">
            Belum Punya akun?
            <a href="/auth/register" className="text-sm font-medium text-primary-300">
              {" "}
              Sign Up
            </a>
          </p>
        </div>

        <div className="hidden flex-1 lg:flex">
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

export default Login;
