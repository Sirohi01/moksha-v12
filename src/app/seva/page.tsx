import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Seva – Services",
  description:
    "Explore Moksha Seva's pillars of service: free cremation, dead body ambulance, and ritual support.",
  alternates: { canonical: `${siteConfig.url}/seva` },
};

export default function SevaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero */}
      <section className="py-24 bg-accent-soft border-b border-accent/10">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-md rounded-full text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6 border border-accent/20">
            Our Mission
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-semibold text-primary mb-6">
            Pillars of Seva
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Dignity is a right, not a privilege. We provide comprehensive support
            to families during their most vulnerable moments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/seva/${service.slug}`} className="group">
                <div className="bg-white rounded-[40px] overflow-hidden shadow-card group-hover:shadow-premium transition-all duration-700 border border-border/40 h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex-1 flex flex-col">
                    <h2 className="font-serif text-3xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted text-lg leading-relaxed mb-10 flex-1">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-4 mb-10">
                      {service.highlights.slice(0, 3).map((h) => (
                        <div key={h} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-border/40 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Learn More</span>
                      <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                        <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-24 bg-bg-alt">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-white rounded-[40px] p-12 lg:p-20 shadow-premium border border-border/40 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary">Need Assistance?</h2>
              <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
                If you are a family in need or know someone who requires our services,
                please do not hesitate to reach out. We are available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <Button href="/request-help" variant="primary" size="lg" className="rounded-full !px-12">
                  Request Help
                </Button>
                <a href="tel:+919773992516" className="text-primary font-bold hover:text-accent transition-colors">
                  Call Helpline: +91 97739 92516
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
