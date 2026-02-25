import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="pt-[72px]">
      <Container className="py-32 text-center">
        <h1 className="font-jakarta text-6xl font-bold text-navy md:text-8xl">
          404
        </h1>
        <p className="mt-4 text-xl text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-yellow px-7 py-3 text-base font-semibold text-navy transition-all hover:bg-yellow/90"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-navy text-navy px-7 py-3 text-base font-semibold transition-all hover:bg-navy hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
