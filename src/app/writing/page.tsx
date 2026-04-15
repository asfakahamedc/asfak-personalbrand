import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { reader } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Weekly deep-dives into the intersections of power, technology, and operations from the perspective of Dhaka. Analytical field notes by Asfak Ahamed Chowdhury.",
  openGraph: {
    title: "Writing · Asfak Ahamed Chowdhury",
    description:
      "Analytical field notes on geopolitics, AI, operations, and business from Dhaka.",
  },
};

export default async function WritingPage() {
  const posts = await reader.collections.posts.all();
  
  // Sort posts by date descending, moving null dates to the end
  const sortedPosts = posts.sort((a, b) => {
    const timeA = a.entry.publishedAt ? new Date(a.entry.publishedAt).getTime() : 0;
    const timeB = b.entry.publishedAt ? new Date(b.entry.publishedAt).getTime() : 0;
    return timeB - timeA;
  });

  return (
    <main className="pt-16">
      <Navbar />

      <Section eyebrow="Writing" title="Selected Analysis & Field Notes">
        <div className="max-w-2xl mb-16">
          <p className="text-lg text-brand-text-secondary">
            Weekly deep-dives into the intersections of power, technology, and operations from the
            perspective of Dhaka.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {sortedPosts.length === 0 ? (
            <p className="text-brand-text-secondary italic">No field notes published yet. Check back soon.</p>
          ) : (
            sortedPosts.map((post) => (
              <Link key={post.slug} href={`/writing/${post.slug}`} className="group">
                <Card className="hover:border-brand-accent">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                      {post.entry.pillar.replace("-", " ")}
                    </span>
                    <span className="font-mono text-[10px] text-brand-text-tertiary">
                      {post.entry.publishedAt ? formatDate(post.entry.publishedAt) : "Draft"}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl mb-4 group-hover:text-brand-accent transition-colors leading-snug">
                    {post.entry.title}
                  </h3>
                  <p className="text-brand-text-secondary text-sm leading-relaxed line-clamp-2">
                    {post.entry.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-brand-accent font-mono text-[10px] uppercase tracking-widest">
                    Read the Analysis{" "}
                    <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                  </div>
                </Card>
              </Link>
            ))
          )}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
