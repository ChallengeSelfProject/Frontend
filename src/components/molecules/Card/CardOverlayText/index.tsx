import React from "react";

type CardOverlayTextProps = {
  children?: React.ReactNode;
};

const CardOverlayText: React.FC<CardOverlayTextProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 flex items-start justify-end">
      <h2 className="rounded-lg bg-primary-400 p-1 text-sm font-light text-white">{children}</h2>
    </div>
  );
};

export default CardOverlayText;
