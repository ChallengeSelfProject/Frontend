import React from "react";
import CardImage from "../CardImage";
import CardContent from "../CardContent";

type CardFrameProps = {
  className?: string;
  children?: React.ReactNode;
};

const CardFrame: React.FC<CardFrameProps> = ({ className, children }) => {
  return <div className={`rounded-lg ${className}`}>{children}</div>;
};

export default CardFrame;
