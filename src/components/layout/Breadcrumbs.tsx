import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "./Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-off-white border-b border-gray-light">
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="text-muted/40" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-blue"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-navy">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
