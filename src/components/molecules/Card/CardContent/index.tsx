import { PaperAirplaneIcon, UsersIcon } from "@heroicons/react/16/solid";
import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import React from "react";
import CardContentItems from "./CardContentItems";
// import { CalendarIcon, UsersIcon, PaperAirplaneIcon } from '@heroicons/react/outline';

const CardContent = () => {
  return (
    <div className="flex max-w-sm flex-col rounded-2xl pl-4 transition-all duration-500">
      <ul className="mb-5 space-y-2 text-left text-lg text-gray-500 md:mb-7">
        <CardContentItems
          icon={<CalendarDateRangeIcon className="h-6 w-6 text-gray-500" />}
          text="12 - 16 July 2021"
        />
        <CardContentItems
          icon={<UsersIcon className="h-6 w-6 text-gray-500" />}
          text="23 Participants"
        />
        <CardContentItems
          icon={<PaperAirplaneIcon className="h-6 w-6 text-gray-500" />}
          text="15 Submitted"
        />
      </ul>
    </div>
  );
};

export default CardContent;
