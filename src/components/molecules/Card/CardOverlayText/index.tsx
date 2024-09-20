import React from "react";

type CardOverlayProps = {
  text: string;
};

const CardOverlay: React.FC<CardOverlayProps> = ({ text }) => {
  return (
    <div className="absolute inset-0 flex items-start justify-end">
      <h2 className="rounded-lg bg-primary-400 p-1 text-sm font-light text-white">{text}</h2>
    </div>
  );
};

export default CardOverlay;
