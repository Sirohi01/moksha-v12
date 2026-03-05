import { impactStats } from "@/config/stats";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

export default function ImpactStatsSection() {
  return (
    <section className="py-section bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeader
          eyebrow="Our Global Impact"
          title="Lives Touched by Your Support"
          subtitle="Every number represents a story of dignity restored and a family supported in their darkest hour."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12">
          {impactStats.slice(0, 4).map((stat, index) => (
            <div key={stat.label} className="text-center relative group">
              {/* Optional vertical divider for desktop */}
              {index !== 0 && (
                <div className="hidden lg:block absolute left-[-24px] top-4 bottom-4 w-[1px] bg-border/40" />
              )}

              <div className="text-5xl lg:text-7xl font-serif font-semibold text-accent mb-6 tracking-tighter transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </div>

              <div className="text-xl font-semibold text-primary mb-3">
                {stat.label}
              </div>

              <div className="text-muted text-sm leading-relaxed max-w-[200px] mx-auto font-medium">
                {stat.description}
              </div>

              {/* Decorative underline */}
              <div className="mt-8 w-12 h-[2px] bg-accent/20 mx-auto transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

