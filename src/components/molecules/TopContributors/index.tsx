import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

type TopContributorsProps = {
  contributorName: string;
  challenge: number;
};

const TopContributors: React.FC<TopContributorsProps> = ({ contributorName, challenge }) => {
  return (
    <div className="flex w-full justify-center lg:w-60 xl:w-80">
      <div className="w-full rounded-2xl bg-primary-100">
        <div className="flex items-center px-2 py-4">
          <div className="relative">
            <img
              className="h-16 w-16 rounded-full lg:h-12 lg:w-12 xl:h-16 xl:w-16"
              src="https://pagedone.io/asset/uploads/1695365794.png"
              alt="Profile"
            />
            <CheckBadgeIcon className="absolute bottom-0 left-10 h-6 w-6 rounded-full border bg-[#0788F5] text-white" />
          </div>
          <div className="ml-4 grid gap-1">
            <h5 className="text-lg font-semibold text-white lg:text-sm xl:text-lg">
              {contributorName}
            </h5>
            <div className="flex items-center space-x-2">
              <RocketLaunchIcon className="h-6 w-6 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700 lg:text-base">
                {challenge} Challenge
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContributors;
