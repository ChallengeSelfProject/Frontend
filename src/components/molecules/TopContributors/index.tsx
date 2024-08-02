import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const TopContributors = () => {
  return (
    <div>
      <div className="w-80 rounded-2xl bg-primary-100 p-3">
        <div className="flex items-center">
          <div className="relative">
            <img
              className="rounded-full"
              src="https://pagedone.io/asset/uploads/1695365794.png"
              alt=""
            />
            <CheckBadgeIcon className="w-5.5 absolute bottom-0 left-9 h-5 rounded-full border bg-[#0788F5] text-white" />
          </div>
          <div className="ml-4 grid gap-1">
            <h5 className="text-lg font-semibold text-white">Firman Wahyudi</h5>
            <div className="flex items-center space-x-2">
              <RocketLaunchIcon className="h-7 w-7 text-gray-700" />
              <span className="text-md font-semibold text-gray-700">5 Challenge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContributors;
