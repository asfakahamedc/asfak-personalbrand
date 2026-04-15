"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  eyebrow?: string;
  title?: string;
  staggerChildren?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  eyebrow,
  title,
  children,
  className,
  staggerChildren = false,
  ...props
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? 0.08 : 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.0, 0.0, 0.2, 1] as any,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={cn("py-20 border-b border-brand-border last:border-b-0", className)}
      {...props}
    >
      <div className="max-w-[960px] mx-auto px-10 md:px-10">
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        <motion.div variants={staggerChildren ? undefined : itemVariants}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export const MotionDiv = motion.div;
