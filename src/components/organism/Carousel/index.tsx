import React, { useState } from "react";
import Slide from "@/components/molecules/CarouselSlide/Slide";
import IndicatorButton from "@/components/atoms/CarouselItems/IndicatorButton";
import Button from "@/components/atoms/CarouselItems/Button";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/carousel/1.png",
    "/assets/carousel/2.jpg",
    "/assets/carousel/3.jpg",
    "/assets/carousel/4.jpg",
    "/assets/carousel/5.jpg",
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-custom-md">
        {images.map((src, index) => (
          <Slide
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            isActive={index === currentIndex}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>
      <div className="absolute left-1/2 z-30 mt-32 flex -translate-x-1/2 space-x-3 sm:mt-24 md:mt-0 lg:mt-6 rtl:space-x-reverse">
        {images.map((_, index) => (
          <IndicatorButton
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
            ariaLabel={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="relative left-6 z-30 flex pt-2 text-gray-900 md:absolute md:bottom-36 md:left-0 md:flex-row md:items-center md:justify-start lg:left-12">
        <div className="md:w-1/2 md:text-left">
          <h2 className="text-xl font-bold md:text-2xl lg:text-4xl">
            Tingkatkan Karirmu, Bangun Portfolio Proffesionalmu
          </h2>
          <Button
            onClick={() => {}}
            className="bg-orange-500 mt-2 rounded-md border border-primary-300 px-4 py-2 text-base font-semibold text-primary-300"
          >
            Lihat Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
