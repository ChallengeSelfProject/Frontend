import React from "react";
import NavLink from "@/components/atoms/NavbarItems/NavLink";

type MenuItemProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({ href, className, children }) => {
  return (
    <li>
      <NavLink className={className} href={href}>
        {children}
      </NavLink>
    </li>
  );
};

export default MenuItem;
