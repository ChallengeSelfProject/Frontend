// components/molecules/NavbarMenu/MobileMenuToggle.tsx (or .jsx if not using TypeScript)
import React from "react";

interface MobileMenuToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ onClick, isOpen }) => (
  <button
    onClick={onClick}
    type="button"
    className="text-md inline-flex h-12 w-12 items-center justify-center rounded-lg p-2 text-primary-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
    aria-controls="navbar-default"
    aria-expanded={isOpen ? "true" : "false"}
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className="h-5 w-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
);

export default MobileMenuToggle;
