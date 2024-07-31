import React from "react";

interface IndicatorButtonProps {
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
}

const IndicatorButton: React.FC<IndicatorButtonProps> = ({ isActive, onClick, ariaLabel }) => (
  <button
    type="button"
    className={`h-2 w-2 rounded-full border md:h-4 md:w-4 ${isActive ? "bg-primary-300" : "border-gray-400"}`}
    aria-label={ariaLabel}
    onClick={onClick}
  ></button>
);

export default IndicatorButton;
