import React from "react";
import FooterIcon from "@/components/atoms/FooterItems/Icon";

type SocialMediaIconsProps = {
  icons: React.ReactNode[];
};

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ icons }) => (
  <div className="flex gap-1 space-x-4 lg:mt-0">
    {icons.map((icon, index) => (
      <FooterIcon
        key={index}
        className="hover:bg-indigo-600 flex h-9 w-9 items-center justify-center"
      >
        {icon}
      </FooterIcon>
    ))}
  </div>
);

export default SocialMediaIcons;
