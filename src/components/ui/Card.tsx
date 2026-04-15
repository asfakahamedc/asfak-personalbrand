import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, hoverable = true }) => {
  return (
    <div
      className={cn(
        "bg-brand-surface border border-brand-border rounded-brand-md px-7 py-6",
        hoverable && "transition-all duration-200 hover:-translate-y-[3px] hover:border-brand-border-strong",
        className
      )}
    >
      {children}
    </div>
  );
};
