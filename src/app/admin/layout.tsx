import React from "react";
import { CMSAuthGuard } from "./CMSAuthGuard";

export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  return <CMSAuthGuard>{children}</CMSAuthGuard>;
}
