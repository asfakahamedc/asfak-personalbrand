import React from "react";
import Link from "next/link";
import { LensIcon } from "../ui/LensIcon";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-brand-border bg-brand-bg">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 opacity-80 hover:opacity-100 transition-opacity">
              <LensIcon className="w-6 h-6 text-brand-accent" />
              <span className="font-display font-bold text-lg">{SITE_CONFIG.name}</span>
            </Link>
            <div>
              <p className="text-2xl font-display italic text-brand-text-primary mb-2">Stop building for the short term.</p>
              <p className="text-brand-text-secondary text-sm">Let’s architect a trajectory that lasts.</p>
            </div>
          </div>

          <div>
            <h4 className="mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-sm text-brand-text-tertiary hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-brand-text-tertiary hover:text-brand-accent transition-colors">About</Link></li>
              <li><Link href="/writing" className="text-sm text-brand-text-tertiary hover:text-brand-accent transition-colors">Writing</Link></li>
              <li><Link href="/work" className="text-sm text-brand-text-tertiary hover:text-brand-accent transition-colors">Work</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6">Social</h4>
            <ul className="flex flex-col gap-4">
              <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-text-tertiary hover:text-brand-accent transition-colors">LinkedIn</a></li>
              <li><a href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-text-tertiary hover:text-brand-accent transition-colors">Substack</a></li>
              <li><a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-text-tertiary hover:text-brand-accent transition-colors">X (Twitter)</a></li>
              <li><a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-text-tertiary hover:text-brand-accent transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-brand-text-tertiary">
            © {new Date().getFullYear()} · Asfak Ahamed Chowdhury · v1.0
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-brand-text-tertiary">
            DHAKA, BANGLADESH · 23.8103° N, 90.4125° E
          </p>
        </div>
      </div>
    </footer>
  );
};
