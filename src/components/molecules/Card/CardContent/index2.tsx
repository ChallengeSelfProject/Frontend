import React from "react";
import CardContentItemsShowC from "./CardContentItemsShowC";

type CardContentShowCProps = {
  text: string;
};
const CardContentShowC: React.FC<CardContentShowCProps> = ({ text }) => {
  return (
    <div className="flex max-w-sm flex-col rounded-2xl px-4 transition-all duration-500">
      <ul className="mb-5 space-y-2 text-left text-lg text-gray-500 md:mb-7">
        <CardContentItemsShowC text={text} />
      </ul>
    </div>
  );
};

export default CardContentShowC;
