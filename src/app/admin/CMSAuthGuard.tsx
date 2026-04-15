"use client";

import React, { useState, useEffect } from "react";
import { LensIcon } from "@/components/ui/LensIcon";
import { Button } from "@/components/ui/Button";

export const CMSAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = sessionStorage.getItem("keystatic_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Static credentials for basic protection of the CMS
    if (username === "asfakahamedc" && password === "ASDF;LKJ_2@26#V3") {
      sessionStorage.setItem("keystatic_admin_auth", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid credentials.");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) return <div className="min-h-screen bg-brand-bg"></div>;

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-6 text-brand-text-primary">
      <div className="max-w-md w-full bg-brand-surface border border-brand-border rounded-brand-md p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-[-50px] right-[-50px] opacity-5 pointer-events-none">
          <LensIcon className="w-40 h-40" />
        </div>

        <div className="relative z-10">
          <LensIcon className="w-8 h-8 text-brand-accent mb-6" />
          <h2 className="text-2xl mb-2 font-display">Lens Authority.</h2>
          <p className="text-brand-text-secondary text-xs mb-8 font-mono tracking-widest uppercase">
            Authentication Required
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-wider">
                Username
              </label>
              <input
                type="text"
                autoComplete="username"
                className="w-full bg-brand-bg border border-brand-border rounded-brand-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-brand-text-tertiary uppercase tracking-wider">
                Access Token
              </label>
              <input
                type="password"
                autoComplete="current-password"
                className="w-full bg-brand-bg border border-brand-border rounded-brand-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-error text-xs font-mono">{error}</p>}

            <Button type="submit" className="w-full">
              Authenticate →
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
