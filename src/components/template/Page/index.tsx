import Navbar from "@/modules/Navbar";
import React from "react";

type PageProps = {
  children?: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
  return <Navbar />;
  {
    children;
  }
};

export default Page;
