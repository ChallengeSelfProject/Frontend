import React from "react";

type LandingPageSectionProps = {
  className?: string;
  children: React.ReactNode;
};
const LandingPageSection: React.FC<LandingPageSectionProps> = ({ className, children }) => {
  return <div className={` ${className}`}>{children}</div>;
};

export default LandingPageSection;
