import { Service, Testimonial, FAQItem, ProcessStep, NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Cabinet Assembly", href: "/services/ikea-cabinet-assembly" },
      { label: "Countertop Installation", href: "/services/countertop-installation" },
      { label: "Appliance Installation", href: "/services/appliance-installation" },
      { label: "Kitchen Removal", href: "/services/kitchen-removal" },
      { label: "Trade Coordination", href: "/services/trade-coordination" },
      { label: "Splashback Installation", href: "/services/splashback-installation" },
      { label: "Bulkhead Construction", href: "/services/bulkhead-construction" },
      { label: "Packaging & Cleanup", href: "/services/packaging-cleanup" },
    ],
  },
  {
    label: "Areas",
    href: "/areas",
    children: [
      { label: "New York", href: "/areas/new-york" },
      { label: "New Jersey", href: "/areas/new-jersey" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    icon: "Wrench",
    title: "Cabinet Assembly",
    slug: "ikea-cabinet-assembly",
    description:
      "Expert assembly of all IKEA kitchen cabinet frames, doors, drawers, and internal fittings with precision and care.",
  },
  {
    icon: "Layers",
    title: "Countertop Installation",
    slug: "countertop-installation",
    description:
      "Professional measurement, cutting, and installation of countertops to perfectly fit your kitchen layout.",
  },
  {
    icon: "Refrigerator",
    title: "Appliance Installation",
    slug: "appliance-installation",
    description:
      "Seamless integration and installation of all kitchen appliances including dishwashers, ovens, and cooktops.",
  },
  {
    icon: "Trash2",
    title: "Kitchen Removal",
    slug: "kitchen-removal",
    description:
      "Complete removal and disposal of your old kitchen cabinets, countertops, and appliances before new installation.",
  },
  {
    icon: "Users",
    title: "Trade Coordination",
    slug: "trade-coordination",
    description:
      "We coordinate with plumbers, electricians, and other trades to ensure a smooth and efficient kitchen installation.",
  },
  {
    icon: "PaintBucket",
    title: "Splashback Installation",
    slug: "splashback-installation",
    description:
      "Installation of tile, glass, or panel splashbacks to protect your walls and complete your kitchen look.",
  },
  {
    icon: "Square",
    title: "Bulkhead Construction",
    slug: "bulkhead-construction",
    description:
      "Custom bulkhead construction to close gaps between your cabinets and ceiling for a polished, built-in finish.",
  },
  {
    icon: "Package",
    title: "Packaging & Cleanup",
    slug: "packaging-cleanup",
    description:
      "Full cleanup and removal of all packaging materials, leaving your kitchen spotless and ready to use.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Upload Your IKEA Plan",
    description:
      "Send us your IKEA kitchen plan PDF or share your order details. We'll review your design and measurements.",
    icon: "Upload",
  },
  {
    step: 2,
    title: "Get Your Free Quote",
    description:
      "We'll provide a detailed, transparent quote based on your kitchen plan. No hidden fees or surprises.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Professional Installation",
    description:
      "Our experienced team installs your IKEA kitchen with precision and care, typically completing within 1-3 days.",
    icon: "CheckCircle",
  },
];

export const SERVICE_AREAS = ["New York", "New Jersey"];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Brooklyn, NY",
    rating: 5,
    quote:
      "Absolutely fantastic service! The team installed our entire IKEA kitchen in just two days. Everything is perfectly aligned and the quality of work is outstanding. Highly recommend!",
  },
  {
    name: "James & Linda K.",
    location: "Hoboken, NJ",
    rating: 5,
    quote:
      "We were nervous about the IKEA kitchen installation, but these guys made it completely stress-free. Professional, punctual, and the finished kitchen looks amazing. Worth every penny.",
  },
  {
    name: "Michael T.",
    location: "Manhattan, NY",
    rating: 5,
    quote:
      "From quote to completion, the entire process was smooth and transparent. They handled all the coordination with our plumber and electrician. Our new kitchen is beautiful!",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does IKEA kitchen installation cost?",
    answer:
      "Installation costs vary depending on the size and complexity of your kitchen. We provide free, detailed quotes based on your IKEA kitchen plan. Most standard kitchen installations range from $2,000 to $5,000. Contact us with your plan for an accurate estimate.",
  },
  {
    question: "How long does the installation take?",
    answer:
      "A typical IKEA kitchen installation takes 1-3 days depending on the size and complexity. Simple galley kitchens can often be completed in a single day, while larger L-shaped or U-shaped kitchens may take 2-3 days. We'll provide a timeline with your quote.",
  },
  {
    question: "Do I need to purchase my IKEA kitchen before contacting you?",
    answer:
      "No! You can contact us at any stage. We can review your IKEA kitchen plan before you purchase and provide advice on your design. However, we do need your finalized IKEA plan to provide an accurate installation quote.",
  },
  {
    question: "Do you handle plumbing and electrical work?",
    answer:
      "We coordinate with licensed plumbers and electricians as part of our service. We'll arrange for all necessary plumbing and electrical work to be completed alongside your cabinet installation for a seamless experience.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve New York and New Jersey, covering over 55 cities across both states. Whether you're in Manhattan, Brooklyn, Jersey City, or Newark, our team can reach you. Check our Areas page for a full list of locations we serve.",
  },
  {
    question: "What warranty do you offer on installation?",
    answer:
      "We offer a 2-year warranty on all installation work. This covers any issues related to the installation itself, such as alignment, fitting, and structural integrity. IKEA's own product warranty covers the cabinets and components themselves.",
  },
];

export const ABOUT_FEATURES = [
  "Certified IKEA kitchen installation specialists",
  "Over 500+ kitchens installed across NY & NJ",
  "Fully insured and background-checked team",
  "Transparent pricing with no hidden fees",
  "2-year warranty on all installation work",
  "Coordination with plumbers & electricians included",
];
