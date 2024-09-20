import { PaperAirplaneIcon, UsersIcon } from "@heroicons/react/16/solid";
import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import React from "react";
import CardContentItemsNewC from "./CardContentItemsNewC";

type CardContentNewCProps = {
  date: string;
  participants: number;
  submitted: number;
};
const CardContentNewC: React.FC<CardContentNewCProps> = ({ date, participants, submitted }) => {
  return (
    <div className="flex max-w-sm flex-col rounded-2xl pl-4 transition-all duration-500">
      <ul className="mb-5 space-y-2 text-left text-lg text-gray-500 md:mb-7">
        <CardContentItemsNewC
          icon={<CalendarDateRangeIcon className="h-6 w-6 text-gray-500" />}
          text={date}
        />
        <CardContentItemsNewC
          icon={<UsersIcon className="h-6 w-6 text-gray-500" />}
          text={`${participants} Participants`}
        />
        <CardContentItemsNewC
          icon={<PaperAirplaneIcon className="h-6 w-6 text-gray-500" />}
          text={`${submitted} Submitted`}
        />
      </ul>
    </div>
  );
};

export default CardContentNewC;
