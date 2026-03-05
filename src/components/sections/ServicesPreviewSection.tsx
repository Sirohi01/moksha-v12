import Link from "next/link";
import Image from "next/image";
import { services } from "@/config/services";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/utils";


export default function ServicesPreviewSection() {
  const previewServices = services.slice(0, 3); // Showing 3 as alternating looks better

  return (
    <section className="py-section bg-bg-alt">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeader
          eyebrow="Our Sacred Service"
          title="Ways We Offer Seva"
          subtitle="A comprehensive support system for families during their most vulnerable journey."
          centered
          className="mb-24"
        />

        <div className="space-y-32">
          {previewServices.map((service, index) => (
            <div
              key={service.slug}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
                index % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium">
                  <Image
                    src="/images/seva.png"
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Text side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-block px-4 py-1.5 bg-accent-soft rounded-full text-[10px] font-semibold text-accent uppercase tracking-[0.2em]">
                  Moksha Seva Initiative
                </div>

                <h3 className="font-serif text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                  {service.title}
                </h3>

                <p className="text-muted text-lg leading-relaxed font-medium">
                  {service.description || service.shortDescription}
                </p>

                <ul className="space-y-4">
                  {["100% Free of Cost", "24/7 Availability", "Vedic Ritual Support"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-primary/70 font-semibold text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button href={`/seva/${service.slug}`} variant="outline" className="rounded-full border-accent/20 hover:border-accent">
                    Read More About This Seva
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Button href="/seva" variant="ghost" className="text-accent underline decoration-accent/20 underline-offset-8 hover:decoration-accent transition-all">
            View All Services & Statistics
          </Button>
        </div>
      </div>
    </section>
  );
}

