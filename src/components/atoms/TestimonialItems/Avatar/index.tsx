import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <img className="mx-auto mb-4 h-24 w-24 rounded-full" src={src} alt={alt} />;
};

export default Avatar;
