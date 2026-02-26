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

            {/* Item #28: Social media links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener nofollow"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-yellow hover:text-navy"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener nofollow"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-yellow hover:text-navy"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.google}
                target="_blank"
                rel="noopener nofollow"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-yellow hover:text-navy"
                aria-label="Google Business Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.yelp}
                target="_blank"
                rel="noopener nofollow"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-yellow hover:text-navy"
                aria-label="Yelp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.96-4.344c.564-.828 1.842-.468 1.842.52v3.5c0 .22-.096.42-.256.565l-.375-.044zm-8.097 5.17l1.544-4.674c.324-.98 1.727-.98 2.05 0l1.545 4.674c.156.47-.24.94-.728.868l-1.841-.272a.49.49 0 01-.001-.001l-1.84.273c-.49.072-.886-.398-.73-.868zM7.7 17.32l4.03-2.949c.72-.527 1.632.237 1.352 1.133l-1.396 4.47c-.18.577-.98.688-1.308.183l-2.633-4.054c-.182-.28-.165-.63.045-.782h-.09zm-.97-5.63l4.954 1.36c.742.203.742 1.25 0 1.453l-4.953 1.36c-.475.13-.886-.345-.686-.793l1.32-2.945a.474.474 0 01.046-.043L6.08 9.137c-.2-.448.212-.924.687-.793l-.036.346zm4.454-8.477l-1.565 4.82c-.204.63-1.09.738-1.437.176L5.47 3.89c-.345-.56.11-1.267.762-1.184l4.25.52c.378.046.668.354.703.736v.25z"/></svg>
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
