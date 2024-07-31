import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SelfProject",
  description: "Generated and create with love by SelfProject.",
  icons: {
    icon: ["/assets/favicons/favicon.ico?v=4"],
    apple: ["/assets/favicons/apple-touch-icon.png?v=4"],
    shortcut: ["/assets/favicons/apple-touch-icon.png?"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css"
          rel="stylesheet"
        /> */}
        <link rel="icon" href="/assets/logo.png" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} mx-4 lg:mx-12`}>
        {children}

        {/* <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
