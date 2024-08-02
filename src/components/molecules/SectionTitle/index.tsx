import React, { FC } from "react";

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
