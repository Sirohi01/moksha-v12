import { cn } from "@/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center mx-auto", className)}>
      {eyebrow && (
        <p className="text-accent font-bold text-[10px] uppercase tracking-[0.4em]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl lg:text-5xl font-serif text-primary font-semibold leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted text-sm lg:text-base font-medium leading-relaxed",
            centered && "mx-auto",
            "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

