import React from "react";
import Image from "@/components/atoms/CardItmes/Image";

interface CardImageProps {
  href?: string;
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const CardImage: React.FC<CardImageProps> = ({ href, src, alt, className, width, height }) => {
  return (
    <a href={href}>
      <div style={{ width, height }} className={`overflow-hidden ${className}`}>
        <Image src={src} alt={alt} className="min-h-56 w-full" />
      </div>
    </a>
  );
};

export default CardImage;
