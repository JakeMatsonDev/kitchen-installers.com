export interface Service {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface CityData {
  name: string;
  slug: string;
  state: "New York" | "New Jersey";
  stateSlug: "new-york" | "new-jersey";
  stateAbbr: "NY" | "NJ";
  county: string;
  population: string;
  tier: "major" | "mid" | "small";
  nearbyIKEA: string;
  nearbyCities: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introContent: string;
  whyChooseContent: string;
  localDetails: string;
  testimonials: Testimonial[];
  faqItems: FAQItem[];
}

export interface ServicePageData {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  longDescription: string[];
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faqItems: FAQItem[];
  priceRange: string;
  relatedServices: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
  relatedSlugs: string[];
}
