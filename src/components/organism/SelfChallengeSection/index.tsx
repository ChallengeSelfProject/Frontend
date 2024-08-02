import React from "react";
import SectionLandingPage from "../LandingPageSectionFrame";
import SectionTitle from "../../molecules/TitleSection";
import SelfChallengeCard from "@/components/molecules/Card/SelfChallengeCard";
const SelfChallengeSection = () => {
  return (
    <SectionLandingPage className="bg-white pt-12">
      <SectionTitle title="Self Challenge" className="mb-4 lg:mb-6" />
      <div className="mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <SelfChallengeCard
          CardImagehref="#"
          CardImagesrc="/assets/cardImage/uiux.jpg"
          CardImagealt="Image 1"
          CardImageclassName="h-auto w-full"
          CardContentTitleheading="UI/UX Design Challenge"
          CardContentTitleHref="#"
          CardContentTitleclassName="text-xl font-bold text-gray-900"
        />
        <SelfChallengeCard
          CardImagehref="#"
          CardImagesrc="/assets/cardImage/frontend.jpg"
          CardImagealt="Image 1"
          CardImageclassName="h-auto w-full"
          CardContentTitleheading="Frontend Developer Challenge"
          CardContentTitleHref="#"
          CardContentTitleclassName="text-xl font-bold text-gray-900"
        />
        <SelfChallengeCard
          CardImagehref="#"
          CardImagesrc="/assets/cardImage/backend.jpg"
          CardImagealt="Image 1"
          CardImageclassName="h-auto w-full"
          CardContentTitleheading="Backend Developer Challenge"
          CardContentTitleHref="#"
          CardContentTitleclassName="text-xl font-bold text-gray-900"
        />
      </div>
    </SectionLandingPage>
  );
};

export default SelfChallengeSection;
//
