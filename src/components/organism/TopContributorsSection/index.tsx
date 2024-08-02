import React from "react";
import LandingPageSection from "../LandingPageSectionFrame";
import SectionTitle from "@/components/molecules/SectionTitle";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import TopContributors from "@/components/molecules/TopContributors";

const TopContributorsSection = () => {
  return (
    <div>
      <LandingPageSection className="bg-white pt-12">
        <SectionTitle title="Top Contributors" className="mb-4 lg:mb-6" />
        <div className="flex flex-col justify-between md:flex-row">
          <TopContributors />
          <TopContributors />
          <TopContributors />
          <TopContributors />
        </div>
      </LandingPageSection>
    </div>
  );
};

export default TopContributorsSection;
