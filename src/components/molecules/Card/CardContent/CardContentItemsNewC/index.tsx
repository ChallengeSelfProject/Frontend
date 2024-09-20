import React from "react";

type CardContentItemsNewCProps = {
  icon: React.ReactNode;
  text: string;
};

const CardContentItemsNewC: React.FC<CardContentItemsNewCProps> = ({ icon, text }) => {
  return (
    <li className="flex items-center space-x-4">
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default CardContentItemsNewC;
