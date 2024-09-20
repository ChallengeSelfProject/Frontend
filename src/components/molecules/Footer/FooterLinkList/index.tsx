import React from "react";
import FooterLink from "@/components/atoms/FooterItems/Link";

type FooterLinkListProps = {
  title: string;
  links: { href: string; text: string }[];
};

const FooterLinkList: React.FC<FooterLinkListProps> = ({ title, links }) => (
  <div>
    <h2 className="text-xl font-semibold">{title}</h2>
    <ul className="mt-3 gap-2">
      {links.map((link, index) => (
        <li key={index}>
          <FooterLink href={link.href} className="text-base font-normal">
            {link.text}
          </FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinkList;
