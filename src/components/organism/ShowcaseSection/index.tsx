// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import SectionLandingPage from "../LandingPageSectionFrame";
import SectionTitle from "@/components/molecules/TitleSection";
import ShowcaseCard from "@/components/molecules/Card/ShowcaseCard";

const ShowcaseSection = () => {
  return (
    <SectionLandingPage className="bg-white pt-5 lg:pt-14">
      <SectionTitle title="Showcase" className="mb-4 lg:mb-6" />
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
              <ShowcaseCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/uiux.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="UI/UX Design"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
                CardContentText="Firman Wahyudi"
                CardOverlayText="UI/UX Design Challenge"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ShowcaseCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/backend.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="Backend Developer"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
                CardContentText="Firman Wahyudi"
                CardOverlayText="UI/UX Design Challenge"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ShowcaseCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/frontend.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="Frontend Developer"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
                CardContentText="Firman Wahyudi"
                CardOverlayText="Backend Developer Challenge"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ShowcaseCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/uiux.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="UI/UX Design"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
                CardContentText="Firman Wahyudi"
                CardOverlayText="UI/UX Design Challenge"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ShowcaseCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/frontend.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="Frontend Developer"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
                CardContentText="Firman Wahyudi"
                CardOverlayText="Frontend Developer Challenge"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <ShowcaseCard
                CardImagehref="#"
                CardImagesrc="/assets/cardImage/backend.jpg"
                CardImagealt="Image 1"
                CardImageclassName="h-auto w-full"
                CardContentTitleheading="Backend Developer"
                CardContentTitleHref="#"
                CardContentTitleclassName="text-xl font-bold text-gray-900"
                CardContentText="Firman Wahyudi"
                CardOverlayText="UI/UX Design Challenge"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </SectionLandingPage>
  );
};

export default ShowcaseSection;
