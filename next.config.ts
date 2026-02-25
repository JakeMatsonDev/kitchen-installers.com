// Items #5 (security headers), #22 (redirects)
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Item #5: Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Item #22: Redirect rules for common URL patterns
  async redirects() {
    return [
      {
        source: "/manhattan",
        destination: "/areas/new-york/manhattan",
        permanent: true,
      },
      {
        source: "/brooklyn",
        destination: "/areas/new-york/brooklyn",
        permanent: true,
      },
      {
        source: "/queens",
        destination: "/areas/new-york/queens",
        permanent: true,
      },
      {
        source: "/bronx",
        destination: "/areas/new-york/bronx",
        permanent: true,
      },
      {
        source: "/jersey-city",
        destination: "/areas/new-jersey/jersey-city",
        permanent: true,
      },
      {
        source: "/hoboken",
        destination: "/areas/new-jersey/hoboken",
        permanent: true,
      },
      {
        source: "/newark",
        destination: "/areas/new-jersey/newark",
        permanent: true,
      },
      {
        source: "/new-york",
        destination: "/areas/new-york",
        permanent: true,
      },
      {
        source: "/new-jersey",
        destination: "/areas/new-jersey",
        permanent: true,
      },
      {
        source: "/ikea-kitchen-installation",
        destination: "/services/ikea-cabinet-assembly",
        permanent: true,
      },
      {
        source: "/ikea-cabinet-assembly",
        destination: "/services/ikea-cabinet-assembly",
        permanent: true,
      },
      {
        source: "/countertop-installation",
        destination: "/services/countertop-installation",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
