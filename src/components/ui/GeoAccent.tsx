import React from "react";
import { cn } from "@/lib/utils";

interface GeoAccentProps {
  className?: string;
  variant?: "hero" | "simple";
}

export const GeoAccent: React.FC<GeoAccentProps> = ({ className, variant = "hero" }) => {
  return (
    <svg
      className={cn("w-[280px] h-[280px] opacity-[0.06] pointer-events-none", className)}
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="140" cy="140" r="139" stroke="white" strokeWidth="0.5" />
      <circle
        cx="140" cy="140" r="100"
        stroke="white"
        strokeWidth="0.5"
        strokeDasharray="4 8"
      />
      <circle cx="140" cy="140" r="60" stroke="white" strokeWidth="0.5" />
      <circle cx="140" cy="140" r="20" stroke="white" strokeWidth="0.5" />
      <line x1="140" y1="0" x2="140" y2="280" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="0" y1="140" x2="280" y2="140" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="0" y1="0" x2="280" y2="280" stroke="white" strokeWidth="0.5" opacity="0.2" />
      <line x1="280" y1="0" x2="0" y2="280" stroke="white" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
};
