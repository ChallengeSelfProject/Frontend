import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <div className="">
        <Image
          src="/assets/image.png"
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
        <div className="flex gap-5 justify-center">
          <a className="btn" href="pages/login">
            Login
          </a>
          <a className="btn" href="pages/register">
            Register
          </a>
          <a className="btn" href="pages/forgotPassword">
            Forgot Password
          </a>
          <a className="btn" href="pages/createNewPassword">
            Create New Password
          </a>
        </div>
      </div>
    </main>
  );
}
