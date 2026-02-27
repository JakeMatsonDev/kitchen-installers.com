export interface VideoProject {
  id: string;
  title: string;
  description: string;
  service: string;
  videoSrc: string;
  posterImage?: string;
}

const R2_BASE = "https://pub-6db6746aabeb40f09d1414db126d0bb8.r2.dev/videos";

export const videoProjects: VideoProject[] = [
  {
    id: "clip-0449",
    title: "Quick Install Clip",
    service: "Cabinet Assembly",
    description: "A quick look at our cabinet installation process in action.",
    videoSrc: `${R2_BASE}/kitchen-clip-0449.mp4`,
    posterImage: "/images/video-thumbs/clip-0449.webp",
  },
  {
    id: "clip-5720",
    title: "Cabinetry Work in Progress",
    service: "Cabinet Assembly",
    description:
      "On-site footage of IKEA cabinets being assembled and installed in a client kitchen.",
    videoSrc: `${R2_BASE}/kitchen-clip-5720.mp4`,
    posterImage: "/images/video-thumbs/clip-5720.webp",
  },
  {
    id: "clip-6267",
    title: "Full Kitchen Cabinet Installation",
    service: "Full Kitchen Install",
    description:
      "Watch our team install a complete set of IKEA SEKTION cabinets from start to finish.",
    videoSrc: `${R2_BASE}/kitchen-clip-6267.mp4`,
    posterImage: "/images/video-thumbs/clip-6267.webp",
  },
  {
    id: "clip-6868",
    title: "Cabinet Assembly Process",
    service: "Cabinet Assembly",
    description:
      "Step-by-step IKEA cabinet assembly — precision and care at every stage.",
    videoSrc: `${R2_BASE}/kitchen-clip-6868.mp4`,
    posterImage: "/images/video-thumbs/clip-6868.webp",
  },
  {
    id: "clip-7749",
    title: "Kitchen Progress Walkthrough",
    service: "Full Kitchen Install",
    description:
      "Walkthrough of a kitchen taking shape — from bare walls to fully installed cabinetry.",
    videoSrc: `${R2_BASE}/kitchen-clip-7749.mp4`,
    posterImage: "/images/video-thumbs/clip-7749.webp",
  },
  {
    id: "clip-7832",
    title: "Full Kitchen Installation Timelapse",
    service: "Full Kitchen Install",
    description:
      "Extended timelapse showing a complete kitchen transformation from empty room to finished install.",
    videoSrc: `${R2_BASE}/kitchen-clip-7832.mp4`,
    posterImage: "/images/video-thumbs/clip-7832.webp",
  },
  {
    id: "clip-7876",
    title: "Finishing Touches",
    service: "Cabinet Assembly",
    description:
      "The final details — adjusting doors, installing trim, and cleaning up for the reveal.",
    videoSrc: `${R2_BASE}/kitchen-clip-7876.mp4`,
    posterImage: "/images/video-thumbs/clip-7876.webp",
  },
  {
    id: "clip-7958",
    title: "Kitchen Renovation Progress",
    service: "Full Kitchen Install",
    description:
      "Tour of a kitchen renovation in progress — new IKEA cabinets transforming the space.",
    videoSrc: `${R2_BASE}/kitchen-clip-7958.mp4`,
    posterImage: "/images/video-thumbs/clip-7958.webp",
  },
  {
    id: "clip-8473",
    title: "Hardware Installation Detail",
    service: "Cabinet Assembly",
    description:
      "Close-up of handle and hardware installation — precision work for a clean finish.",
    videoSrc: `${R2_BASE}/kitchen-clip-8473.mp4`,
    posterImage: "/images/video-thumbs/clip-8473.webp",
  },
  {
    id: "clip-8621",
    title: "Installation Day",
    service: "Full Kitchen Install",
    description:
      "Behind the scenes on installation day — our team at work on another IKEA kitchen.",
    videoSrc: `${R2_BASE}/kitchen-clip-8621.mp4`,
    posterImage: "/images/video-thumbs/clip-8621.webp",
  },
  {
    id: "clip-9673",
    title: "Cabinet Fitting Process",
    service: "Cabinet Assembly",
    description:
      "Detailed look at how we fit and secure each IKEA cabinet for a lasting installation.",
    videoSrc: `${R2_BASE}/kitchen-clip-9673.mp4`,
    posterImage: "/images/video-thumbs/clip-9673.webp",
  },
];
