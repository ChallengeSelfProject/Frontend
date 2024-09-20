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
        <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
          <TopContributors contributorName="Firman Wahyudi" challenge={12} />
          <TopContributors contributorName="Dwi Wahyu Prambodo" challenge={12} />
          <TopContributors contributorName="Fadhil Nurhuda" challenge={12} />
          <TopContributors contributorName="M Syaifudin" challenge={12} />
        </div>
      </LandingPageSection>
    </div>
  );
};

export default TopContributorsSection;
