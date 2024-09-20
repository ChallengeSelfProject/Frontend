import React from "react";
import FooterContent from "./FooterContent";
import Text from "@/components/atoms/FooterItems/Text";
import FooterLogo from "@/components/atoms/FooterItems/Logo";

const Footer = () => (
  <div className="relative mt-16 w-full bg-primary-50 px-5 pt-12 md:px-12 lg:mr-0">
    <div>
      <FooterLogo />
    </div>
    <FooterContent />
    <Text className="mt-3 block pb-6 text-center text-base text-gray-500">
      <a href="">SelfProject</a> 2024, All rights reserved.
    </Text>
  </div>
);

export default Footer;
