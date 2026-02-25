// Items #3, #4, #12, #18, #21, #23, #25
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Rubik, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessJsonLd, siteNavigationJsonLd } from "@/lib/structured-data";
import GoogleAnalytics, { GTMNoScript } from "@/components/analytics/GoogleAnalytics";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
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
    // Item #4: Default OG image
    images: [
      {
        url: "/api/og?title=Professional%20IKEA%20Kitchen%20Installation&subtitle=New%20York%20%26%20New%20Jersey",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        {/* Item #23: Preconnect to external image domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
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
          <ExitIntentPopup />
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
