import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "A Law Dropout Building Better Systems. Asfak Ahamed Chowdhury offers strategic perspective, not validation.",
  openGraph: {
    title: "About · Asfak Ahamed Chowdhury",
    description:
      "A Law Dropout Building Better Systems. Asfak Ahamed Chowdhury offers strategic perspective, not validation.",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <Navbar />

      {/* STORY BLOCK */}
      <Section eyebrow="01 — The Narrative" title="A Law Dropout Building Better Systems.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-brand-text-secondary leading-relaxed">
            <p className="text-xl font-display italic text-brand-text-primary mb-8 leading-snug">
              "I don't offer validation; I offer perspective."
            </p>
            <p>
              I spent 3.5 years studying law at BAIUST before deliberately walking away. Law taught
              me that everything is a framework. If you understand the rules of the system, you can
              predict the outcome.
            </p>
            <p>
              My background isn't linear. It is an accumulation of ground-level operational
              experiences and high-level digital abstraction. I think in long-term consequences. I
              build for May 2036, not just May 2026.
            </p>
            <p>
              If you want a "yes-man," find a freelancer. If you want a strategist who understands
              the cost of a bad decision, let's talk.
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border p-8 rounded-brand-md h-fit">
            <h4 className="mb-6">The Non-Linear Path</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <span className="text-brand-accent font-mono">01</span>
                <span>
                  <strong>Operations:</strong> Managed sand export logistics from Sylhet to Chittagong.
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-brand-accent font-mono">02</span>
                <span>
                  <strong>Analysis:</strong> Ran market research and branch ops for Digito Martech.
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-brand-accent font-mono">03</span>
                <span>
                  <strong>Scale:</strong> Trained AI for Invisible Technologies; managed political ops for '26 Election.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* NOW */}
      <Section eyebrow="03 — Perspective" title="Built for Consequence.">
        <div className="max-w-xl">
          <p className="mb-8 leading-relaxed text-brand-text-secondary">
            Currently focused on developing local-first AI strategies for businesses,
            writing analyses for my Substack, and building an agency model oriented around logical
            resilience rather than aesthetic fluff.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer">
                Follow the Analysis
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/work">Work with me</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
