import React from "react";
import CardFrame from "../CardFrame";
import CardImage from "../CardImage";
import CardContent from "../CardContent";
import CardContentTitle from "../CardContent/CardContentTitle";
import CardOverlayText from "../CardOverlayText";

type ChallengeCardProps = {
  CardImagehref: string;
  CardImagesrc: string;
  CardImagealt: string;
  CardImageclassName: string;
  CardContentTitleheading: string;
  CardContentTitleHref: string;
  CardContentTitleclassName: string;
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  CardImagehref,
  CardImagesrc,
  CardImagealt,
  CardImageclassName,
  CardContentTitleheading,
  CardContentTitleHref,
  CardContentTitleclassName,
}) => {
  return (
    <div className="relative mx-auto flex flex-col items-center gap-4 rounded-lg border-2 border-gray-500 lg:flex-row lg:justify-between">
      <CardFrame className="max-w-md overflow-hidden rounded-lg">
        <CardImage
          href={CardImagehref}
          src={CardImagesrc}
          alt={CardImagealt}
          className={CardImageclassName}
        />
        <CardContentTitle
          heading={CardContentTitleheading}
          href={CardContentTitleHref}
          className={CardContentTitleclassName}
        />
        <CardContent />
        <CardOverlayText>UI/UX Design Challenge</CardOverlayText>
      </CardFrame>
    </div>
  );
};

export default ChallengeCard;
