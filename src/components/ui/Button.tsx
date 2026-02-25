import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

  const variants = {
    primary: "bg-yellow text-navy hover:bg-yellow/90 shadow-sm hover:shadow-md",
    secondary: "bg-blue text-white hover:bg-blue/90 shadow-sm hover:shadow-md",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
