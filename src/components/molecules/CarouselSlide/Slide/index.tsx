import React from "react";
import Image from "@/components/atoms/CarouselItems/Image";

interface SlideProps {
  src: string;
  alt: string;
  isActive: boolean;
  index: number;
  currentIndex: number;
}

const Slide: React.FC<SlideProps> = ({ src, alt, isActive, index, currentIndex }) => (
  <div
    className={`absolute block w-full transition-transform duration-700 ease-in-out ${isActive ? "translate-x-0" : "translate-x-full"}`}
    style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
  >
    <Image src={src} alt={alt} className="block h-full w-full object-cover" />
  </div>
);

export default Slide;
