import { cn } from "@/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-card border border-border/40 overflow-hidden",
        hover &&
        "transition-all duration-300 hover:shadow-premium hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>

  );
}
