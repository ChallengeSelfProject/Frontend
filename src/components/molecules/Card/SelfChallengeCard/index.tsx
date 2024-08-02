import React from "react";
import CardFrame from "../CardFrame";
import CardImage from "../CardImage";
import CardContent from "../CardContent";
import CardContentTitle from "../CardContent/CardContentTitle";

type SelfChallengeCardProps = {
  CardImagehref: string;
  CardImagesrc: string;
  CardImagealt: string;
  CardImageclassName: string;
  // heading: string;
  // cardContentHref: string;
  CardContentTitleheading: string;
  CardContentTitleHref: string;
  CardContentTitleclassName: string;
};

const SelfChallengeCard: React.FC<SelfChallengeCardProps> = ({
  CardImagehref,
  CardImagesrc,
  CardImagealt,
  CardImageclassName,
  CardContentTitleheading,
  CardContentTitleHref,
  CardContentTitleclassName,
}) => {
  return (
    <CardFrame className="max-w-md">
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
    </CardFrame>
  );
};

export default SelfChallengeCard;
