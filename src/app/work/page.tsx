import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { LensIcon } from "@/components/ui/LensIcon";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Operational Doctrine",
  description:
    "An 8-phase operational roadmap for conversion-first ecosystems. I architect websites as an engineering discipline within the Google AI Stack.",
  openGraph: {
    title: "The Operational Doctrine · Asfak Ahamed Chowdhury",
    description:
      "An 8-phase operational roadmap for conversion-first ecosystems built exclusively within the Google AI Stack.",
  },
};

export default function WorkPage() {
  return (
    <main className="pt-16">
      <Navbar />

      {/* HERO / POSITIONING */}
      <Section eyebrow="Work: The Operational Doctrine" title="Websites as an Engineering Discipline.">
        <div className="max-w-3xl mb-8">
          <p className="text-xl md:text-2xl text-brand-text-secondary leading-relaxed font-body">
            Most agencies "design" sites. I architect conversion-first ecosystems using the Google
            AI Stack. I don't follow trends; I follow an 8-phase operational roadmap where
            performance is a prerequisite, not an afterthought.
          </p>
        </div>
      </Section>

      {/* 01. THE PROTOCOL */}
      <Section eyebrow="01" title="The Protocol: End-to-End Execution" className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-3xl mb-12">
          <p className="text-brand-text-secondary leading-relaxed">
            I provide a full-spectrum build service. Every project follows a non-negotiable, 8-phase
            blueprint executed entirely within the Google AI Ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:border-brand-accent">
            <h4 className="font-mono text-brand-accent text-xs mb-2 uppercase tracking-widest">Phase 0</h4>
            <h3 className="text-xl mb-3">Discovery & Scoping</h3>
            <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
              I don't start with colors; I start with logic. Using NotebookLM and Gemini, I perform
              a competitive analysis to identify the "Positioning Gap"—what your competitors aren't
              saying.
            </p>
            <p className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-widest border-t border-brand-border pt-4">
              <span className="text-brand-text-primary mr-2">Deliverable:</span> A Project Strategy Brief defining your Single Site Goal.
            </p>
          </Card>

          <Card className="hover:border-brand-accent">
            <h4 className="font-mono text-brand-accent text-xs mb-2 uppercase tracking-widest">Phase 1</h4>
            <h3 className="text-xl mb-3">Brand Operating System</h3>
            <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
              Brand is not decoration. I build your "Brand Identity OS" using the Major Third scale
              and the 60-30-10 color rule.
            </p>
            <p className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-widest border-t border-brand-border pt-4">
              <span className="text-brand-text-primary mr-2">Focus:</span> A single visual metaphor that anchors your entire identity.
            </p>
          </Card>

          <Card className="hover:border-brand-accent">
            <h4 className="font-mono text-brand-accent text-xs mb-2 uppercase tracking-widest">Phase 2 & 3</h4>
            <h3 className="text-xl mb-3">Architecture & Design Systems</h3>
            <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
              Built on Next.js 14+ (App Router) and Firebase. I implement a CRO-First Design System
              before a single page is coded.
            </p>
            <p className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-widest border-t border-brand-border pt-4">
              <span className="text-brand-text-primary mr-2">Standard:</span> 8-point spatial grids and fluid typography. If it doesn't scale, it doesn't ship.
            </p>
          </Card>

          <Card className="hover:border-brand-accent">
            <h4 className="font-mono text-brand-accent text-xs mb-2 uppercase tracking-widest">Phase 4 & 5</h4>
            <h3 className="text-xl mb-3">AI-Powered Frontend & Backend</h3>
            <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
              Development happens in Google Antigravity (Project IDX). Frontend focuses on Core Web
              Vitals. Backend runs on Serverless Firebase.
            </p>
            <div className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-widest border-t border-brand-border pt-4 space-y-2">
              <p><span className="text-brand-text-primary mr-2">Frontend blocker:</span> LCP {'<'} 2.5s</p>
              <p><span className="text-brand-text-primary mr-2">AI Integration:</span> Vertex AI and Gemini APIs for semantic logic.</p>
            </div>
          </Card>

          <Card className="hover:border-brand-accent md:col-span-2">
            <h4 className="font-mono text-brand-accent text-xs mb-2 uppercase tracking-widest">Phase 6 & 7</h4>
            <h3 className="text-xl mb-3">CRO & Deployment</h3>
            <p className="text-sm text-brand-text-secondary leading-relaxed mb-4 max-w-2xl">
              I instrument GA4 and GTM before launch. Deployment is fully automated via CI/CD pipelines
              on Vercel directly from GitHub Actions. Zero manual deployments.
            </p>
            <p className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-widest border-t border-brand-border pt-4">
              <span className="text-brand-text-primary mr-2">Verification:</span> A 100% Pre-Launch CRO Audit.
            </p>
          </Card>
        </div>
      </Section>

      {/* 02. TECHNOLOGY STACK & 03. CONVERSION AUDIT */}
      <Section eyebrow="" title="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-8 font-display text-3xl">02. The Technology Stack</h2>
            <p className="text-brand-text-secondary mb-8">
              I build exclusively within the Google Ecosystem. This ensures native integration,
              elite security, and infinite scale.
            </p>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest">
              <li className="flex gap-4 border-b border-brand-border pb-3">
                <span className="text-brand-text-tertiary w-32">Logic</span>
                <span className="text-brand-text-primary">Gemini & NotebookLM</span>
              </li>
              <li className="flex gap-4 border-b border-brand-border pb-3">
                <span className="text-brand-text-tertiary w-32">Development</span>
                <span className="text-brand-text-primary">Google Antigravity (Project IDX)</span>
              </li>
              <li className="flex gap-4 border-b border-brand-border pb-3">
                <span className="text-brand-text-tertiary w-32">Infrastructure</span>
                <span className="text-brand-text-primary">Firebase</span>
              </li>
              <li className="flex gap-4 border-b border-brand-border pb-3">
                <span className="text-brand-text-tertiary w-32">Intelligence</span>
                <span className="text-brand-text-primary">Vertex AI & Gemini APIs</span>
              </li>
              <li className="flex gap-4 border-b border-brand-border pb-3">
                <span className="text-brand-text-tertiary w-32">Performance</span>
                <span className="text-brand-text-primary">Lighthouse & PageSpeed Insights</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-text-tertiary w-32">Analysis</span>
                <span className="text-brand-text-primary">GA4 & BigQuery</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-8 font-display text-3xl">03. The Conversion Audit (CRO)</h2>
            <p className="text-brand-text-secondary mb-8">
              I don't wait for luck. Every site I build must pass a rigorous CRO checklist before
              it goes live:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <LensIcon className="w-5 h-5 text-brand-accent mt-1 shrink-0" />
                <div>
                  <h4 className="text-lg">Above-the-Fold Rule</h4>
                  <p className="text-sm text-brand-text-secondary">Value prop communicated in {'<'}5 seconds.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <LensIcon className="w-5 h-5 text-brand-accent mt-1 shrink-0" />
                <div>
                  <h4 className="text-lg">Friction Audit</h4>
                  <p className="text-sm text-brand-text-secondary">Every unnecessary form field is removed.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <LensIcon className="w-5 h-5 text-brand-accent mt-1 shrink-0" />
                <div>
                  <h4 className="text-lg">Trust Mechanics</h4>
                  <p className="text-sm text-brand-text-secondary">Strategic placement of social proof within the first 900px of scroll.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 04. ONGOING OPTIMIZATION */}
      <Section eyebrow="04" title="Ongoing Optimization" className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-2xl mb-12">
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            A live site is a product in production. I offer a structured Maintenance & CRO Cycle
            to ensure continued trajectory dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-brand-border p-6 rounded-brand-sm">
            <h4 className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-2">Weekly</h4>
            <h3 className="text-lg mb-2">Health Checks</h3>
            <p className="text-sm text-brand-text-secondary">SEO health monitoring via Search Console.</p>
          </div>
          <div className="border border-brand-border p-6 rounded-brand-sm">
            <h4 className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-2">Monthly</h4>
            <h3 className="text-lg mb-2">Technical Audit</h3>
            <p className="text-sm text-brand-text-secondary">Full technical audit and dependency hardening.</p>
          </div>
          <div className="border border-brand-border p-6 rounded-brand-sm">
            <h4 className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-2">Quarterly</h4>
            <h3 className="text-lg mb-2">A/B Testing</h3>
            <p className="text-sm text-brand-text-secondary">Testing of high-traffic pages using Firebase Remote Config.</p>
          </div>
        </div>
      </Section>

      {/* CONTACT DIRECTIVE */}
      <Section eyebrow="Directive" title="Stop guessing. Start architecting." className="md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xl md:text-2xl font-display text-brand-text-primary mb-6 leading-tight">
              If you require a website built to engineering standards with conversion as the primary KPI, initiate contact.
            </p>
            <p className="text-sm text-brand-accent font-mono uppercase tracking-widest bg-brand-surface p-4 rounded-brand-sm border border-brand-border inline-block">
              [Book a Strategic Consult] — Limited availability for high-complexity builds.
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
