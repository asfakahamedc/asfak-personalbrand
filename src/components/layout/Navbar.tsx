import React from "react";
import Link from "next/link";
import { LensIcon } from "../ui/LensIcon";
import { Button } from "../ui/Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-[960px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <LensIcon className="w-8 h-8 text-brand-accent transition-transform duration-300 group-hover:rotate-90" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none">Asfak</span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-brand-accent">Ahamed Chowdhury</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-body text-brand-text-secondary hover:text-brand-accent transition-colors">
            About
          </Link>
          <Link href="/writing" className="text-sm font-body text-brand-text-secondary hover:text-brand-accent transition-colors">
            Writing
          </Link>
          <Link href="/work" className="text-sm font-body text-brand-text-secondary hover:text-brand-accent transition-colors">
            Work
          </Link>
          <Button variant="ghost" size="sm" className="hidden lg:flex">
            Subscribe
          </Button>
        </div>
      </div>
    </nav>
  );
};
