import React from "react";

type SectionLandingPageProps = {
  className?: string;
  children: React.ReactNode;
};
const SectionLandingPage: React.FC<SectionLandingPageProps> = ({ className, children }) => {
  return <div className={`mt-16 ${className}`}>{children}</div>;
};

export default SectionLandingPage;
