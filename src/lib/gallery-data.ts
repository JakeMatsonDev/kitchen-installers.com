// Item #14: Gallery data — Replace placeholder Unsplash URLs with real project photos
export interface GalleryProject {
  id: string;
  title: string;
  city: string;
  state: "NY" | "NJ";
  service: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export const galleryProjects: GalleryProject[] = [
  {
    id: "manhattan-sektion-remodel",
    title: "Modern White SEKTION Kitchen",
    city: "Manhattan",
    state: "NY",
    service: "Cabinet Assembly",
    description:
      "Complete IKEA SEKTION cabinet installation in a Manhattan apartment. 18 cabinets with AXSTAD white matte doors, quartz countertops, and integrated appliances.",
    beforeImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    id: "brooklyn-countertop",
    title: "Brooklyn Brownstone Countertop Upgrade",
    city: "Brooklyn",
    state: "NY",
    service: "Countertop Installation",
    description:
      "Butcher block countertop installation on existing IKEA SEKTION base cabinets. Custom cuts for undermount sink and cooktop.",
    beforeImage:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=600&q=80",
  },
  {
    id: "hoboken-full-reno",
    title: "Hoboken Full Kitchen Renovation",
    city: "Hoboken",
    state: "NJ",
    service: "Cabinet Assembly",
    description:
      "Full kitchen tear-out and replacement with IKEA SEKTION cabinets, BODBYN grey doors, and marble-look laminate countertops.",
    beforeImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80",
  },
  {
    id: "jersey-city-appliance",
    title: "Jersey City Appliance Integration",
    city: "Jersey City",
    state: "NJ",
    service: "Appliance Installation",
    description:
      "Built-in appliance installation including dishwasher, oven, cooktop, and microwave in a new IKEA kitchen.",
    beforeImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80",
  },
  {
    id: "queens-small-kitchen",
    title: "Queens Small Space Kitchen",
    city: "Queens",
    state: "NY",
    service: "Cabinet Assembly",
    description:
      "Maximizing a compact NYC kitchen with IKEA SEKTION wall and base cabinets. KNOXHULT doors with open shelving for a modern look.",
    beforeImage:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: "newark-removal-install",
    title: "Newark Kitchen Removal & Install",
    city: "Newark",
    state: "NJ",
    service: "Kitchen Removal",
    description:
      "Complete old kitchen demolition and removal followed by new IKEA SEKTION installation. 22 cabinets with VOXTORP dark grey doors.",
    beforeImage:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
  },
];
