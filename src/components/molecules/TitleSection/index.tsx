import React, { FC } from "react";

type TitleSectionProps = {
  title: string;
  className?: string;
};

const TitleSection: React.FC<TitleSectionProps> = ({ title, className }) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
};

export default TitleSection;
