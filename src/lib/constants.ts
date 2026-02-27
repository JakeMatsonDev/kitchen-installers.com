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
      "Send us your IKEA kitchen plan PDF or order details — takes just 2 minutes. We'll review your design and measurements for free.",
    icon: "Upload",
  },
  {
    step: 2,
    title: "Get Your Free Quote",
    description:
      "Within 3 hours, you'll receive a detailed, transparent quote with a full cost breakdown. No hidden fees or surprises.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Professional Installation",
    description:
      "Our fully insured team installs your IKEA kitchen with precision and care, completing most kitchens in just 1–3 days.",
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
      "Absolutely fantastic service! The team installed our 28-cabinet IKEA SEKTION kitchen in just two days. Every door is perfectly aligned and the soft-close drawers work flawlessly. Highly recommend!",
  },
  {
    name: "James & Linda K.",
    location: "Hoboken, NJ",
    rating: 5,
    quote:
      "We were nervous about our L-shaped IKEA kitchen installation, but these guys made it completely stress-free. They showed up on time, handled the bulkhead construction beautifully, and the finished kitchen looks incredible. Worth every penny.",
  },
  {
    name: "Michael T.",
    location: "Manhattan, NY",
    rating: 5,
    quote:
      "Got our quote within 2 hours and installation was done in a day and a half. The attention to detail was incredible — perfect countertop seams and every cabinet is level. Our new kitchen looks like it cost twice what we paid.",
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
      "We specialize in cabinet assembly and installation. For plumbing and electrical work, you'll need to arrange a licensed plumber or electrician separately. We're happy to advise on the sequencing so everything goes smoothly.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve New York and New Jersey, covering over 55 cities across both states. Whether you're in Manhattan, Brooklyn, Jersey City, or Newark, our team can reach you. Check our Areas page for a full list of locations we serve.",
  },
  {
    question: "What warranty do you offer on installation?",
    answer:
      "We offer a 5-year warranty on all installation work. This covers any issues related to the installation itself, such as alignment, fitting, and structural integrity. IKEA's own product warranty covers the cabinets and components themselves.",
  },
];

export const ABOUT_FEATURES = [
  "Experienced IKEA SEKTION system specialists",
  "Over 600+ kitchens installed across NY & NJ",
  "Fully insured — your home is protected throughout the project",
  "Transparent pricing with no hidden fees",
  "5-year warranty on all installation work",
  "7+ years of specialized IKEA kitchen experience",
];
