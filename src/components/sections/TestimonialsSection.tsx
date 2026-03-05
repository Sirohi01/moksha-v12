import { testimonials } from "@/config/stats";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function TestimonialsSection() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <section className="py-section bg-bg-alt overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeader
          eyebrow="Voices of Gratitude"
          title="From the Grieving Families"
          subtitle="It is our humble duty to support families during their most vulnerable moments."
          centered
          className="mb-24"
        />

        <div className="relative max-w-[1100px] mx-auto">
          {/* Decorative Decal */}
          <div className="absolute -top-12 -left-12 text-[200px] font-serif text-accent/5 leading-none select-none">
            &ldquo;
          </div>

          <div className="flex flex-col gap-12">
            {testimonials.slice(0, 2).map((t, index) => (
              <div
                key={index}
                className="relative bg-white p-12 lg:p-20 rounded-[40px] shadow-premium border border-border/40 animate-fade-up group"
              >
                <blockquote className="relative z-10 text-2xl lg:text-3xl font-serif text-primary leading-relaxed mb-12 italic text-center lg:text-left">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex flex-col lg:flex-row items-center gap-6 pt-10 border-t border-border/40">
                  <div className="relative w-20 h-20 overflow-hidden rounded-full border-4 border-accent-soft shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                    <Image
                      src={avatarImages[index]}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-serif font-bold text-2xl text-primary mb-1">
                      {t.name}
                    </div>
                    <div className="text-muted font-bold text-xs uppercase tracking-[0.2em]">
                      {t.location} · {t.service}
                    </div>
                  </div>

                  {/* Rating or Stamp */}
                  <div className="lg:ml-auto flex items-center gap-1 text-accent">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="w-1.5 h-1.5 rounded-full bg-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button href="/testimonials" variant="ghost" className="text-accent underline decoration-accent/20 underline-offset-8 hover:decoration-accent transition-all font-bold uppercase tracking-widest text-xs">
              Read All Impact Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
