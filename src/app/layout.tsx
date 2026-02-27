// Items #3, #4, #12, #18, #21, #23, #25
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Rubik, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessJsonLd, siteNavigationJsonLd } from "@/lib/structured-data";
import GoogleAnalytics, { GTMNoScript } from "@/components/analytics/GoogleAnalytics";
import MotionProvider from "@/components/ui/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "Kitchen Installers — Professional IKEA Kitchen Installation in NY & NJ",
    template: "%s | Kitchen Installers",
  },
  description:
    "Expert IKEA kitchen cabinet installation services in New York and New Jersey. Professional assembly, countertops, appliances, and more. Get a free quote today.",
  metadataBase: new URL("https://www.kitchen-installers.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kitchen Installers",
    images: [
      {
        url: "/images/gallery/img_6245.webp",
        width: 1200,
        height: 630,
        alt: "Kitchen Installers — Professional IKEA Kitchen Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Item #4: Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${rubik.variable} ${lora.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Item #3: Google Analytics */}
        <GoogleAnalytics />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <GTMNoScript />

        {/* Item #12: SiteNavigationElement schema */}
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={siteNavigationJsonLd()} />

        {/* Item #3: Respect prefers-reduced-motion globally */}
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />

          {/* Item #18: Exit-intent popup */}
        </MotionProvider>

        {/* Item #25: Live chat widget — replace with your Tidio/Intercom project ID */}
        {/* Uncomment when ready:
        <Script
          src="//code.tidio.co/YOUR_TIDIO_KEY.js"
          strategy="lazyOnload"
        />
        */}
      </body>
    </html>
  );
}
