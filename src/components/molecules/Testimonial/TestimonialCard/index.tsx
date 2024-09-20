import React from "react";
import Avatar from "@/components/atoms/TestimonialItems/Avatar";
import Text from "@/components/atoms/TestimonialItems/Text";
import Icon from "@/components/atoms/TestimonialItems/Icon";

interface TestimonialCardProps {
  name: string;
  image: string;
  feedback: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, image, feedback, position }) => {
  return (
    <div className="relative bg-primary-200 p-6 text-center shadow-lg">
      <Avatar src={image} alt={name} />
      <Icon />
      <Text className="text-xl font-semibold text-white">{name}</Text>
      <Text className="text-base font-light text-white">{position}</Text>
      <Text className="text-base font-semibold text-white">{feedback}</Text>
    </div>
  );
};

export default TestimonialCard;
