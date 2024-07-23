import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <div className="">
        <Image
          src="/assets/logo.png"
          alt="SelfProject Logo"
          // className="dark:invert"
          width={200}
          height={34}
          priority
        />
      </div>
      <div className="">
        <h3 className="font-medium">Welcome to Self Project </h3>
      </div>
      <div className="">
        <h4 className="text-center">Menu</h4>
        <div className="flex justify-center gap-5">
          <Link className="btn" href="auth/login">
            Login
          </Link>
          <Link className="btn" href="auth/register">
            Register
          </Link>
          <Link className="btn" href="auth/forgot-password">
            Forgot Password
          </Link>
          <Link className="btn" href="auth/reset-password">
            Create New Password
          </Link>
        </div>
      </div>
    </main>
  );
}
