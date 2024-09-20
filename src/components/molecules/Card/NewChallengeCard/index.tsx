import React from "react";
import CardFrame from "../CardFrame";
import CardImage from "../CardImage";
import CardOverlay from "../CardOverlayText";
import CardContentTitle from "../CardContent/CardContentTitle";
import CardContentNewC from "../CardContent";

type NewChallengeCardProps = {
  CardImagehref: string;
  CardImagesrc: string;
  CardImagealt: string;
  CardImageclassName: string;
  CardContentTitleheading: string;
  CardContentTitleHref: string;
  CardContentTitleclassName: string;
  CardContentDate: string;
  CardContentParticipants: number;
  CardContentSubmitted: number;
  CardOverlayText: string;
};

const NewChallengeCard: React.FC<NewChallengeCardProps> = ({
  CardImagehref,
  CardImagesrc,
  CardImagealt,
  CardImageclassName,
  CardContentTitleheading,
  CardContentTitleHref,
  CardContentTitleclassName,
  CardContentDate,
  CardContentParticipants,
  CardContentSubmitted,
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
        <CardContentNewC
          date={CardContentDate}
          participants={CardContentParticipants}
          submitted={CardContentSubmitted}
        />
        <CardOverlay text={CardOverlayText} />
      </CardFrame>
    </div>
  );
};

export default NewChallengeCard;
