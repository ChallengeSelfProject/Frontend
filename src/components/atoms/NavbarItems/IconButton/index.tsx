import React from "react";

type IconButtonProps = {
  onClick: () => void;
  ariaLable: string;
  children: React.ReactNode;
};

const IconButton: React.FC<IconButtonProps> = ({ onClick, ariaLable, children }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-md inline-flex h-12 w-12 items-center justify-center rounded-lg p-2 text-primary-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
      aria-controls="navbar-default"
      aria-expanded={ariaLable ? "true" : "false"}
    >
      {children}
    </button>
  );
};

export default IconButton;
