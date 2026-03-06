import { testimonials } from "@/config/stats";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function TestimonialsSection() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <section className="py-section bg-bg-alt overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeader
          eyebrow="Voices of Gratitude"
          title="From the Grieving Families"
          subtitle="It is our humble duty to support families during their most vulnerable moments."
          centered
          className="mb-16"
        />

        {/* Desktop Grid - 3 cards in a row */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Decorative Quotes */}
          <div className="absolute -top-8 -left-8 text-[180px] font-serif text-accent/5 leading-none select-none">
            &ldquo;
          </div>
          
          {testimonials.slice(0, 3).map((t, index) => (
            <div
              key={index}
              className="relative bg-white p-6 lg:p-8 rounded-2xl shadow-premium border border-border/40 animate-fade-up group hover:-translate-y-1 transition-all duration-300"
            >
              <blockquote className="relative z-10 text-base lg:text-lg text-primary leading-relaxed mb-6 line-clamp-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-5 border-t border-border/40">
                <div className="relative w-14 h-14 overflow-hidden rounded-full border-3 border-accent-soft shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-md">
                  <Image
                    src={avatarImages[index]}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif font-bold text-lg text-primary mb-0.5 truncate">
                    {t.name}
                  </div>
                  <div className="text-muted text-xs font-medium uppercase tracking-wider">
                    {t.location} · {t.service}
                  </div>
                </div>
              </div>

              {/* Rating Dots - Small accent */}
              <div className="absolute top-5 right-5 flex gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-1 h-1 rounded-full bg-accent" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll - only visible on small screens */}
        <div className="md:hidden relative">
          <div className="flex flex-row gap-4 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory">
            {testimonials.slice(0, 3).map((t, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-2xl shadow-premium border border-border/40 animate-fade-up group min-w-[280px] w-[85vw] max-w-[320px] flex-shrink-0 snap-start"
              >
                <blockquote className="relative z-10 text-base text-primary leading-relaxed mb-6 line-clamp-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 pt-5 border-t border-border/40">
                  <div className="relative w-14 h-14 overflow-hidden rounded-full border-3 border-accent-soft shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-md">
                    <Image
                      src={avatarImages[index]}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-serif font-bold text-base text-primary mb-0.5 truncate">
                      {t.name}
                    </div>
                    <div className="text-muted text-[0.6rem] font-medium uppercase tracking-wider">
                      {t.location} · {t.service}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-2">
            {[0, 1, 2].map((dot) => (
              <div key={dot} className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}