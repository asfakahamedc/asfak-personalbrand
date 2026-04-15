import React from "react";
import { cn } from "@/lib/utils";

interface LensIconProps {
  className?: string;
}

export const LensIcon: React.FC<LensIconProps> = ({ className }) => {
  return (
    <svg
      className={cn("w-14 h-14", className)}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="27" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="28" cy="28" r="18"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <circle
        cx="28" cy="28" r="8"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line x1="28" y1="0" x2="28" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="28" y1="48" x2="28" y2="56" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="28" x2="8" y2="28" stroke="currentColor" strokeWidth="1" />
      <line x1="48" y1="28" x2="56" y2="28" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
};
