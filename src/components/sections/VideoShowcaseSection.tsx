"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import VideoCard from "../ui/VideoCard";
import { videoProjects } from "@/lib/video-gallery-data";

// Featured videos for homepage — pick a diverse mix of services
const FEATURED_IDS = ["clip-6267", "clip-7749", "clip-7832", "clip-8621"];
const featuredVideos = FEATURED_IDS.map(
  (id) => videoProjects.find((v) => v.id === id)!
);

export default function VideoShowcaseSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          label="See Our Work"
          title="Our Work in Action"
          subtitle="Watch real IKEA kitchen installations by our team — from cabinet assembly to the finished result."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredVideos.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <VideoCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-8 py-3.5 font-semibold text-navy transition-all hover:bg-navy hover:text-white"
          >
            View All Videos & Photos
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
