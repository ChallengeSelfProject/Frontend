"use client";

import React from "react";
import Carousel from "@/components/organism/Carousel";
import Navbar from "@/components/organism/Navbar";
import SelfChallengeSection from "@/components/organism/SelfChallengeSection";
import NewChallengeSection from "@/components/organism/NewChallengeSection";
import TopContributorsSection from "@/components/organism/TopContributorsSection";
import ShowcaseSection from "@/components/organism/ShowcaseSection";
import TestimonialsSlider from "@/components/organism/TestimoniSection";
import Footer from "@/components/organism/Footer";

//
// console.log(items);
const LandingPage = () => {
  return (
    // <div className="overflow-x-hidden">
    <div>
      <div className="mx-4 sm:mx-12">
        <Navbar />
      </div>
      <div className="mx-4 sm:mx-12">
        <Carousel />
      </div>
      <div className="mx-4 sm:mx-12">
        <SelfChallengeSection />
      </div>
      <div className="mx-4 sm:mx-12 lg:mr-0">
        <NewChallengeSection />
      </div>
      <div className="mx-4 sm:mx-12">
        <TopContributorsSection />
      </div>
      <div className="mx-4 sm:mx-12 lg:mr-0">
        <ShowcaseSection />
      </div>
      <div>
        <TestimonialsSlider />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
