import { clsx } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1280px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
