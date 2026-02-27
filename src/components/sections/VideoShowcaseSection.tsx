"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import VideoCard from "../ui/VideoCard";
import { videoProjects } from "@/lib/video-gallery-data";

export default function VideoShowcaseSection() {
  return (
    <section className="bg-white py-16 md:py-28">
      <Container>
        <SectionHeading
          label="See Our Work"
          title="Our Work in Action"
          subtitle="Watch real IKEA kitchen installations by our team — from cabinet assembly to the finished result."
        />
      </Container>

      {/* On mobile: minimal side padding so videos fill the screen */}
      <div className="mx-auto max-w-[1280px] px-2 sm:px-5 md:px-8">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 md:gap-6">
          {videoProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: Math.min(i, 4) * 0.1 }}
            >
              <VideoCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
