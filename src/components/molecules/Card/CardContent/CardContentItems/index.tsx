import React from "react";

type CardContentItemsProps = {
  icon: React.ReactNode;
  text: string;
};

const CardContentItems: React.FC<CardContentItemsProps> = ({ icon, text }) => {
  return (
    <li className="flex items-center space-x-4">
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default CardContentItems;
