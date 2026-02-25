// Item #4: Updated OG image to use dynamic API route
import type { Metadata } from "next";

const SITE_URL = "https://www.kitchen-installers.com";
const SITE_NAME = "Kitchen Installers";

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  // Use dynamic OG image API if no custom image provided
  const image =
    ogImage ||
    `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent("Professional IKEA Kitchen Installation — NY & NJ")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export { SITE_URL, SITE_NAME };
