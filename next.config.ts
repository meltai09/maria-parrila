import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CLAUDE.md content is fixed by the client brief — don't let `next dev`
  // append its own AI-agent rules block to it.
  agentRules: false,
};

export default nextConfig;
