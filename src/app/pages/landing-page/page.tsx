"use client";

import React from "react";
import Carousel from "@/components/organism/Carousel";
import Navbar from "@/components/organism/Navbar";
import SelfChallengeSection from "@/components/organism/SelfChallengeSection";
import NewChallengeSection from "@/components/organism/NewChallengeSection";
import TopContributorsSection from "@/components/organism/TopContributorsSection";

//
// console.log(items);
const LandingPage = () => {
  return (
    // <div className="overflow-x-hidden">
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <SelfChallengeSection />
      </div>
      <div>
        <NewChallengeSection />
      </div>
      <div>
        <TopContributorsSection />
      </div>
    </div>
  );
};

export default LandingPage;
