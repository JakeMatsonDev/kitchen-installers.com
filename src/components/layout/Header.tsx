// Items #8 (click-to-call), #2 (centralized contact info)
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Container from "./Container";
import { NAV_LINKS } from "@/lib/constants";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow font-jakarta text-lg font-bold text-navy">
            K
          </div>
          <span className="font-jakarta text-lg font-bold text-navy">
            Kitchen Installers
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-blue ${
                    isActive(link.href) ? "text-blue" : "text-navy/80"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} />
                </Link>

                {openDropdown === link.href && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[220px] rounded-xl bg-white py-2 shadow-lg border border-gray-light">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-navy/80 transition-colors hover:bg-off-white hover:text-blue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-blue ${
                  isActive(link.href) ? "text-blue" : "text-navy/80"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Item #8: Click-to-call phone in header */}
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-navy/80 transition-colors hover:text-blue"
          >
            <Phone size={16} />
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-yellow px-5 py-2 text-sm font-semibold text-navy transition-all hover:bg-yellow/90 shadow-sm hover:shadow-md"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile: Phone + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Item #8: Mobile click-to-call */}
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow"
            aria-label="Call us"
          >
            <Phone size={18} className="text-navy" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-white shadow-lg border-t border-gray-light max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-navy hover:text-blue transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-sm text-muted hover:text-blue transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border-2 border-navy px-7 py-3 text-base font-semibold text-navy transition-all"
            >
              <Phone size={18} />
              Call {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center rounded-full bg-yellow px-7 py-3 text-base font-semibold text-navy transition-all hover:bg-yellow/90"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
