// Items #2 (centralized contact), #27 (privacy/terms links), #28 (social links)
import Link from "next/link";
import Container from "./Container";
import { SITE_CONFIG } from "@/lib/site-config";

const topNYCities = [
  { name: "Manhattan", slug: "manhattan" },
  { name: "Brooklyn", slug: "brooklyn" },
  { name: "Queens", slug: "queens" },
  { name: "Bronx", slug: "bronx" },
  { name: "Staten Island", slug: "staten-island" },
  { name: "Yonkers", slug: "yonkers" },
  { name: "White Plains", slug: "white-plains" },
  { name: "Hempstead", slug: "hempstead" },
];

const topNJCities = [
  { name: "Newark", slug: "newark" },
  { name: "Jersey City", slug: "jersey-city" },
  { name: "Hoboken", slug: "hoboken" },
  { name: "Paterson", slug: "paterson" },
  { name: "Elizabeth", slug: "elizabeth" },
  { name: "Edison", slug: "edison" },
  { name: "Cherry Hill", slug: "cherry-hill" },
  { name: "Princeton", slug: "princeton" },
];

const serviceLinks = [
  { name: "Cabinet Assembly", slug: "ikea-cabinet-assembly" },
  { name: "Countertop Installation", slug: "countertop-installation" },
  { name: "Appliance Installation", slug: "appliance-installation" },
  { name: "Kitchen Removal", slug: "kitchen-removal" },
  { name: "Trade Coordination", slug: "trade-coordination" },
  { name: "Splashback Installation", slug: "splashback-installation" },
  { name: "Bulkhead Construction", slug: "bulkhead-construction" },
  { name: "Packaging & Cleanup", slug: "packaging-cleanup" },
];

export default function Footer() {
  return (
    <footer className="bg-navy py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow font-jakarta text-lg font-bold text-navy">
                K
              </div>
              <span className="font-jakarta text-lg font-bold text-white">
                Kitchen Installers
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Professional IKEA kitchen cabinet installation services in New York
              and New Jersey. Quality craftsmanship, transparent pricing, and
              exceptional results.
            </p>
            {/* Item #2: Centralized contact info */}
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="break-all transition-colors hover:text-yellow"
              >
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="transition-colors hover:text-yellow"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>

            {/* Directory links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.yelp}
                target="_blank"
                rel="noopener nofollow"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-yellow hover:text-navy"
                aria-label="Yelp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.96-4.344c.564-.828 1.842-.468 1.842.52v3.5c0 .22-.096.42-.256.565l-.375-.044zm-8.097 5.17l1.544-4.674c.324-.98 1.727-.98 2.05 0l1.545 4.674c.156.47-.24.94-.728.868l-1.841-.272a.49.49 0 01-.001-.001l-1.84.273c-.49.072-.886-.398-.73-.868zM7.7 17.32l4.03-2.949c.72-.527 1.632.237 1.352 1.133l-1.396 4.47c-.18.577-.98.688-1.308.183l-2.633-4.054c-.182-.28-.165-.63.045-.782h-.09zm-.97-5.63l4.954 1.36c.742.203.742 1.25 0 1.453l-4.953 1.36c-.475.13-.886-.345-.686-.793l1.32-2.945a.474.474 0 01.046-.043L6.08 9.137c-.2-.448.212-.924.687-.793l-.036.346zm4.454-8.477l-1.565 4.82c-.204.63-1.09.738-1.437.176L5.47 3.89c-.345-.56.11-1.267.762-1.184l4.25.52c.378.046.668.354.703.736v.25z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.thumbtack}
                target="_blank"
                rel="noopener nofollow"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-yellow hover:text-navy"
                aria-label="Thumbtack"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.243 7.757L12 12l-4.243-4.243a1 1 0 011.414-1.414L12 9.172l2.829-2.829a1 1 0 011.414 1.414zM12 14a2 2 0 110-4 2 2 0 010 4zm0 6a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-jakarta text-sm font-bold uppercase tracking-wider text-white/40">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-yellow"
                >
                  {s.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* New York */}
          <div>
            <h4 className="mb-4 font-jakarta text-sm font-bold uppercase tracking-wider text-white/40">
              New York
            </h4>
            <nav className="flex flex-col gap-2">
              {topNYCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/new-york/${c.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-yellow"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/areas/new-york"
                className="text-sm font-medium text-yellow/80 transition-colors hover:text-yellow"
              >
                View all NY areas →
              </Link>
            </nav>
          </div>

          {/* New Jersey */}
          <div>
            <h4 className="mb-4 font-jakarta text-sm font-bold uppercase tracking-wider text-white/40">
              New Jersey
            </h4>
            <nav className="flex flex-col gap-2">
              {topNJCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/new-jersey/${c.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-yellow"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/areas/new-jersey"
                className="text-sm font-medium text-yellow/80 transition-colors hover:text-yellow"
              >
                View all NJ areas →
              </Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-jakarta text-sm font-bold uppercase tracking-wider text-white/40">
              Company
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-white/70 transition-colors hover:text-yellow">
                About Us
              </Link>
              <Link href="/blog" className="text-sm text-white/70 transition-colors hover:text-yellow">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-yellow">
                Contact
              </Link>
              <Link href="/gallery" className="text-sm text-white/70 transition-colors hover:text-yellow">
                Gallery
              </Link>
              <Link href="/cost-calculator" className="text-sm text-white/70 transition-colors hover:text-yellow">
                Cost Calculator
              </Link>
              <Link href="/faq" className="text-sm text-white/70 transition-colors hover:text-yellow">
                FAQ
              </Link>
              <Link href="/areas" className="text-sm text-white/70 transition-colors hover:text-yellow">
                All Service Areas
              </Link>
              <Link href="/services" className="text-sm text-white/70 transition-colors hover:text-yellow">
                All Services
              </Link>
            </nav>
          </div>
        </div>

        {/* Item #27: Privacy/Terms links + copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
            <Link href="/privacy" className="transition-colors hover:text-white/70">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="transition-colors hover:text-white/70">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/faq" className="transition-colors hover:text-white/70">
              FAQ
            </Link>
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Kitchen Installers. All rights
            reserved. Not affiliated with or endorsed by IKEA.
          </p>
        </div>
      </Container>
    </footer>
  );
}
