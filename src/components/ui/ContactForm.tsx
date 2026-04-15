"use client";

import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", scope: "", goal: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", scope: "", goal: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <Card className="max-w-xl mx-auto p-8 md:p-10 border-brand-border-strong bg-brand-surface-2">
      {status === "success" ? (
        <div className="text-center py-10">
          <div className="text-success font-mono text-sm uppercase tracking-widest mb-4">Submission Successful</div>
          <h3 className="mb-4">Intelligence Received.</h3>
          <p className="text-brand-text-secondary mb-8">
            Thank you for the data. I will analyze and respond within 48 hours.
          </p>
          <Button variant="ghost" onClick={() => setStatus("idle")}>
            New Transmission
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label htmlFor="name" className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-wider">
              Name [Identity]
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full bg-brand-bg border border-brand-border rounded-brand-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div className="space-y-1.5">
            <label htmlFor="email" className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-wider">
              Email [Communication]
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="direct@email.com"
              className="w-full bg-brand-bg border border-brand-border rounded-brand-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="scope" className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-wider">
              Project Scope [Objective]
            </label>
            <input
              id="scope"
              type="text"
              required
              placeholder="What system are you trying to build?"
              className="w-full bg-brand-bg border border-brand-border rounded-brand-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
              value={formData.scope}
              onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
            />
          </div>
          
          <div className="space-y-1.5">
            <label htmlFor="goal" className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-wider">
              Long-term Goal [Context]
            </label>
            <textarea
              id="goal"
              required
              rows={4}
              placeholder="What is the 5-year consequence of this project?"
              className="w-full bg-brand-bg border border-brand-border rounded-brand-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Executing..." : "Initiate Protocol →"}
          </Button>
          
          {status === "error" && (
            <p className="text-xs text-error font-mono text-center">
              System failure during transmission. Please try again or email directly.
            </p>
          )}
        </form>
      )}
    </Card>
  );
};
