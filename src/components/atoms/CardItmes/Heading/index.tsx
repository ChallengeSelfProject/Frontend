import React from "react";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return <h5 className={`mb-2 ${className}`}>{text}</h5>;
};

export default Heading;
