// Items #9, #10, #11, #12: Enhanced structured data
import type { CityData, FAQItem, ServicePageData } from "./types";
import { SITE_URL } from "./seo";
import { SITE_CONFIG } from "./site-config";
import { NAV_LINKS } from "./constants";

// Item #10: PostalAddress + Item #9: sameAs + Item #11: expanded areaServed
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    description:
      "Professional IKEA kitchen cabinet installation services in New York and New Jersey.",
    url: SITE_URL,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    // Item #10: Full postal address
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.stateAbbr,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
    // Item #9: sameAs for entity verification
    sameAs: [
      SITE_CONFIG.social.yelp,
      SITE_CONFIG.social.thumbtack,
    ],
    // Item #11: Expanded areaServed with major cities
    areaServed: [
      { "@type": "City", name: "Manhattan", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Brooklyn", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Queens", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Bronx", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Staten Island", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Yonkers", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "White Plains", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Hempstead", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "New Rochelle", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Mount Vernon", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Scarsdale", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Garden City", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Long Beach", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Port Chester", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Rye", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Newark", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Jersey City", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Hoboken", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Paterson", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Elizabeth", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Edison", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Cherry Hill", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Princeton", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Montclair", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Clifton", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Union City", containedInPlace: { "@type": "State", name: "New Jersey" } },
      { "@type": "City", name: "Parsippany", containedInPlace: { "@type": "State", name: "New Jersey" } },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    image: `${SITE_URL}/og-default.jpg`,
  };
}

// Item #12: SiteNavigationElement schema
export function siteNavigationJsonLd() {
  const navItems = NAV_LINKS.map((link) => ({
    "@type": "SiteNavigationElement",
    name: link.label,
    url: `${SITE_URL}${link.href}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: navItems,
  };
}

export function serviceJsonLd(service: ServicePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "State", name: "New York" },
      { "@type": "State", name: "New Jersey" },
    ],
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function faqJsonLd(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function cityServiceJsonLd(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/areas/${city.stateSlug}/${city.slug}#business`,
    name: `Kitchen Installers — ${city.name}, ${city.stateAbbr}`,
    description: city.metaDescription,
    url: `${SITE_URL}/areas/${city.stateSlug}/${city.slug}`,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.stateAbbr,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
  };
}

export function reviewJsonLd(
  city: CityData
) {
  return city.testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    reviewBody: t.quote,
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_CONFIG.name,
    },
  }));
}

export function blogPostJsonLd(post: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-default.jpg`,
      },
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}
