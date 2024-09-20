import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const FooterLink: React.FC<LinkProps> = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export default FooterLink;
