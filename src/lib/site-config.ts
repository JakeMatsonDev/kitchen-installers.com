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
  phone: "(555) 123-4567",
  phoneRaw: "+15551234567", // For tel: links
  email: "info@kitchen-installers.com",
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

  // Social & Directory Links (update with real URLs)
  social: {
    facebook: "https://www.facebook.com/kitcheninstallers",
    instagram: "https://www.instagram.com/kitcheninstallers",
    google: "https://g.page/kitchen-installers",
    yelp: "https://www.yelp.com/biz/kitchen-installers",
    houzz: "https://www.houzz.com/professionals/kitchen-installers",
  },

  // Analytics (replace with real IDs)
  analytics: {
    gaId: "G-XXXXXXXXXX", // Google Analytics 4 Measurement ID
    gtmId: "GTM-XXXXXXX", // Google Tag Manager ID
  },
} as const;
