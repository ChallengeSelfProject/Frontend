import React from "react";
import CardFrame from "../CardFrame";
import CardImage from "../CardImage";
import CardContent from "../CardContent";
import CardContentTitle from "../CardContent/CardContentTitle";
import CardOverlay from "../CardOverlayText";
import CardContentShowC from "../CardContent/index2";

type ShowcaseCardProps = {
  CardImagehref: string;
  CardImagesrc: string;
  CardImagealt: string;
  CardImageclassName: string;
  CardContentTitleheading: string;
  CardContentTitleHref: string;
  CardContentTitleclassName: string;
  CardContentText: string;
  CardOverlayText: string;
};

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  CardImagehref,
  CardImagesrc,
  CardImagealt,
  CardImageclassName,
  CardContentTitleheading,
  CardContentTitleHref,
  CardContentTitleclassName,
  CardContentText,
  CardOverlayText,
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
        <CardContentShowC text={CardContentText} />
        <CardOverlay text={CardOverlayText} />
      </CardFrame>
    </div>
  );
};

export default ShowcaseCard;
