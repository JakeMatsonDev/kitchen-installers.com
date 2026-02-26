// ============================================================
// SITE CONFIGURATION — Update these values with your real info
// ============================================================
// This is the SINGLE SOURCE OF TRUTH for all contact info,
// business details, and social links used across the site.
// ============================================================

export const SITE_CONFIG = {
  // Business Info
  name: "Kitchen Installers",
  legalName: "Kitchen Installers LLC",
  phone: "(646) 258-0717",
  phoneRaw: "+16462580717", // For tel: links
  email: "newenglandkitcheninstallers@gmail.com",
  url: "https://www.kitchen-installers.com",

  // Physical Address (required for Google Local Pack)
  address: {
    street: "123 Main Street, Suite 100",
    city: "New York",
    state: "New York",
    stateAbbr: "NY",
    zip: "10001",
    country: "US",
  },

  // Business Hours (ISO 8601 format)
  openingHours: [
    "Mo-Fr 07:00-19:00",
    "Sa 08:00-17:00",
  ],

  // Social & Directory Links
  social: {
    thumbtack:
      "https://www.thumbtack.com/ny/new-york/furniture-assembly/ikea-kitchen-cabinet-installation-ikea-only/service/518476018749095951",
    yelp: "https://www.yelp.com/biz/ikea-kitchen-installers-new-york-2",
  },

  // Analytics (replace with real IDs)
  analytics: {
    gaId: "G-XXXXXXXXXX", // Google Analytics 4 Measurement ID
    gtmId: "GTM-XXXXXXX", // Google Tag Manager ID
  },
} as const;
