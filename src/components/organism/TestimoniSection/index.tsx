import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@styles/testimonial.css";
import TestimonialCard from "@/components/molecules/Testimonial/TestimonialCard";
import SectionLandingPage from "../SectionLandingPage";
import SectionTitle from "@/components/molecules/SectionTitle";

const testimonials = [
  {
    name: "EMILIANO AQUILANI",
    image: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    feedback:
      "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    position: "Backend Developer at Gopaylater",
  },
  {
    name: "ANNA ITURBE",
    image: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    feedback:
      "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    position: "Frontend Developer at Gopaylater",
  },
  {
    name: "LARA ATKINSON",
    image: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    feedback:
      "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    position: "UI/UX Designer at Gopaylater",
  },
  {
    name: "MICHAEL SMITH",
    image: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    feedback:
      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
    position: "Project Manager at Gopaylater",
  },
  {
    name: "SOPHIA JOHNSON",
    image: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    feedback:
      "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
    position: "Marketing Specialist at Gopaylater",
  },
];

const truncateFeedback = (feedback: string, maxLength: number) => {
  return feedback.length > maxLength ? `${feedback.substring(0, maxLength)}...` : feedback;
};

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8500,
    centerMode: true,
    centerPadding: "350px", // Center padding for large screens
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: "10px", // Center padding for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "80px", // Center padding for small screens
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 554,
        settings: {
          centerPadding: "50px", // Center padding for extra small screens
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SectionLandingPage className="bg-white">
      <SectionTitle title="Testimonial" className="mb-4 text-center lg:mb-6" />
      <section className="testimonials">
        <div className="mx-auto gap-2">
          <Slider {...settings} className="limited-dots-slider">
            {testimonials.map((testimonial, index) => (
              <div className="min-h-[300px]">
                <TestimonialCard
                  {...testimonial}
                  feedback={truncateFeedback(testimonial.feedback, 180)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </SectionLandingPage>
  );
};

export default Testimonials;
