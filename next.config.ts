import type { NextConfig } from "next";
import { DEFAULT_LOCALE } from "./src/i18n/locales";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // All pages live under /[locale]; send the bare root to the default language.
  // Temporary (307) rather than permanent so switching to Accept-Language
  // negotiation later is not blocked by cached redirects.
  async redirects() {
    return [{ source: "/", destination: `/${DEFAULT_LOCALE}`, permanent: false }];
  },
};

export default nextConfig;
