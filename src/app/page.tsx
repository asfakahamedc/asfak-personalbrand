import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LensIcon } from "@/components/ui/LensIcon";
import { GeoAccent } from "@/components/ui/GeoAccent";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="pt-16">
      <Navbar />

      {/* HERO SECTION */}
      <Section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden border-none pt-24 text-left">
        <GeoAccent className="absolute right-0 top-1/2 -translate-y-1/2 md:right-10 lg:right-20 opacity-[0.04] scale-150 md:scale-100 hidden md:block pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <LensIcon className="text-brand-accent mb-12 opacity-90" />
          <h1 className="mb-8 text-5xl md:text-7xl font-display leading-[1.1]">
            <em className="italic text-brand-accent pr-2">Logic</em> is the only<br />
            sustainable moat.
          </h1>
          <p className="text-lg md:text-xl text-brand-text-secondary leading-relaxed mb-10 max-w-2xl font-body">
            Strategic perspective for a fractured world. I build high-performance web systems and
            provide analysis on the intersection of geopolitics, technology, and operational
            integrity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/work">Inquire for Project</Link>
            </Button>
            <Button variant="ghost" asChild size="lg">
              <Link href="/writing">Read Field Notes</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* THREE PILLARS */}
      <Section eyebrow="01 — Trajectory" title="Core Value Proposition" staggerChildren>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col h-full hover:border-brand-accent transition-colors">
            <span className="font-mono text-[10px] text-brand-accent mb-4">01</span>
            <h3 className="text-xl mb-4">System Architecture</h3>
            <p className="text-sm text-brand-text-secondary flex-grow leading-relaxed">
              AI-assisted web development focused on conversion and technical resilience.
            </p>
          </Card>
          <Card className="flex flex-col h-full hover:border-brand-accent transition-colors">
            <span className="font-mono text-[10px] text-brand-accent mb-4">02</span>
            <h3 className="text-xl mb-4">Operational Ops</h3>
            <p className="text-sm text-brand-text-secondary flex-grow leading-relaxed">
              Lessons from sand export to US-remote AI training applied to your business scale.
            </p>
          </Card>
          <Card className="flex flex-col h-full hover:border-brand-accent transition-colors">
            <span className="font-mono text-[10px] text-brand-accent mb-4">03</span>
            <h3 className="text-xl mb-4">Geopolitical Analysis</h3>
            <p className="text-sm text-brand-text-secondary flex-grow leading-relaxed">
              Decoding how global shifts dictate local market viability in Bangladesh.
            </p>
          </Card>
        </div>
      </Section>

      {/* NEWSLETTER CTA */}
      <Section className="bg-brand-surface py-24 mb-0 border-none">
        <div className="text-center max-w-2xl mx-auto">
          <LensIcon className="mx-auto mb-8 text-brand-accent w-10 h-10 opacity-70" />
          <h2 className="mb-6 font-display">Perspective, not validation.</h2>
          <p className="text-brand-text-secondary mb-10 mx-auto leading-relaxed">
            Join professionals receiving analytical field notes on the systems shaping growth, directly to your inbox.
          </p>
          <Button size="lg" asChild>
            <a href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer">
              Subscribe Free
            </a>
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
