import { cn } from "@/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-primary text-white",
    accent: "bg-accent-light text-primary",
    muted: "bg-slate-100 text-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
