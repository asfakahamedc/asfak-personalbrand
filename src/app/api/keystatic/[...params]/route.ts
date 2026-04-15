import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

export const { GET, POST } = makeRouteHandler({ config });

// Force dynamic — Keystatic API routes must never be statically pre-rendered
export const dynamic = "force-dynamic";
