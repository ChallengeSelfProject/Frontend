import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";

type CardContentItemsShowCProps = {
  text: string;
};

const CardContentItemsShowC: React.FC<CardContentItemsShowCProps> = ({ text }) => {
  return (
    <li className="flex items-center justify-between space-x-4">
      <div className="flex items-center justify-center gap-2">
        <UserCircleIcon className="h-6 w-6 text-gray-500" />
        <span className="text-base font-semibold">{text}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <HeartIcon className="h-6 w-6 text-gray-500" />
        <BookmarkIcon className="h-6 w-6 text-gray-500" />
      </div>
    </li>
  );
};

export default CardContentItemsShowC;
