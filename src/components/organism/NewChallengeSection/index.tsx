// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import SectionLandingPage from "../LandingPageSectionFrame";
import SectionTitle from "@/components/molecules/TitleSection";
import ChallengeCard from "@/components/molecules/Card/ChallengeCard";

const NewChallengeSection = () => {
  return (
    <SectionLandingPage className="bg-white pt-5 lg:pt-14">
      <SectionTitle title="New Challenge" className="mb-4 lg:mb-6" />
      <div className="relative w-full">
        <Swiper
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1920: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1028: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            990: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          className="centered-slide-carousel"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ChallengeCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/uiux.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="UI/UX Design Challenge"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ChallengeCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/backend.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="Backend Developer Challenge"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ChallengeCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/frontend.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="Frontend Developer Challenge"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ChallengeCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/uiux.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="UI/UX Design Challenge"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ChallengeCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/frontend.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="Frontend Developer Challenge"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ChallengeCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/backend.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="Backend Developer Challenge"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </SectionLandingPage>
  );
};

export default NewChallengeSection;
