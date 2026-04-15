import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", asChild = false, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    
    const variants = {
      primary: "bg-brand-accent text-brand-bg hover:bg-brand-accent-hover",
      ghost: "bg-transparent text-brand-text-primary border border-brand-border-strong hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent-muted",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-brand-sm transition-all duration-150 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";
