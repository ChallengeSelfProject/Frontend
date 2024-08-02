import React from "react";
import Heading from "@/components/atoms/CardItmes/Heading";

interface CardContentTitleProps {
  heading: string;
  href?: string;
  className?: string;
}

const CardContentTitle: React.FC<CardContentTitleProps> = ({ heading, href, className }) => {
  return (
    <div className="pl-4">
      <a href={`${href}`}>
        <Heading text={heading} className={`${className}`} />
      </a>
    </div>
  );
};

export default CardContentTitle;
