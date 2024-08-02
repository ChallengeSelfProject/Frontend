"use client";

import React, { useState } from "react";
import Logo from "@/components/atoms/NavbarItems/Logo";
import MobileMenuToggle from "@/components/molecules/NavbarMenu/MobileMenuToggle";
import MenuItem from "@/components/molecules/NavbarMenu/MenuItem";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-white py-4">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between">
        <Logo />
        <MobileMenuToggle onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="mb-0 mt-4 flex flex-col gap-4 rounded-lg px-4 pt-6 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <MenuItem href="#">Beranda</MenuItem>
            <MenuItem href="#">Challenge</MenuItem>
            <MenuItem href="#">Showcase</MenuItem>
            <MenuItem href="#">FAQ</MenuItem>
          </ul>
        </div>
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col gap-4 rounded-lg px-4 font-medium md:mt-0 md:flex-row md:gap-0 md:space-x-4 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <MenuItem
              className="block rounded-lg border border-primary-300 bg-white px-4 py-2 text-sm font-semibold text-primary-300 hover:bg-gray-100"
              href="#"
            >
              Register
            </MenuItem>
            <MenuItem
              className="block rounded-lg bg-primary-300 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-gray-100"
              href="#"
            >
              Login
            </MenuItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
