import React from "react";

type IconProps = {
  children: React.ReactNode;
  className?: string;
};

const FooterIcon: React.FC<IconProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default FooterIcon;
