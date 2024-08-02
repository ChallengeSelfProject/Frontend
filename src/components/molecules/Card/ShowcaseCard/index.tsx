import React from "react";
import CardFrame from "../CardFrame";
import CardImage from "../CardImage";
import CardContent from "../CardContent";

const HorizontalCard = () => {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      <CardFrame className="max-w-md">
        <CardImage
          href="#"
          src="/assets/cardImage/uiux.jpg"
          alt="UX Design"
          className="h-auto w-full"
        />
        <CardContent heading="UI/UX Design Challenge" href="#" />
      </CardFrame>
      <CardFrame className="max-w-md">
        <CardImage
          href="#"
          src="/assets/cardImage/frontend.jpg"
          alt="Frontend Design"
          className="h-auto w-full"
        />
        <CardContent heading="Frontend Developer Challenge" href="#" />
      </CardFrame>
      <CardFrame className="max-w-md">
        <CardImage
          href="#"
          src="/assets/cardImage/backend.jpg"
          alt="Backend Design"
          className="h-auto w-full"
        />
        <CardContent heading="Backend Developer Challenge" href="#" />
      </CardFrame>
    </div>
  );
};

export default HorizontalCard;
