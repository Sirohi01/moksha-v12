import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Not Found" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${siteConfig.url}/seva/${service.slug}` },
  };
}

export default function SevaDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Detail Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-2xl animate-fade-in">
            {service.icon}
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-semibold text-white mb-6 animate-fade-up">
            {service.title}
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Main Content */}
            <div className="lg:col-span-7 space-y-16">
              <div className="space-y-6">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">About the Program</h2>
                <p className="text-primary text-xl lg:text-2xl font-serif leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-10">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Program Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex gap-4 items-start bg-bg-alt p-8 rounded-[32px] border border-border/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span className="text-sm font-bold text-primary tracking-wide leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-[40px] p-10 lg:p-12 shadow-premium border border-border/40 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">In Service Of</h3>
                  <p className="text-primary text-xl font-serif font-bold italic">{service.beneficiaries}</p>
                </div>

                <div className="pt-8 border-t border-border/40 space-y-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Your Support Matters</h4>
                  <p className="text-muted text-sm font-medium leading-relaxed">
                    By sponsoring this specific seva, you provide the essential materials
                    and logistical support needed to perform these sacred rituals.
                  </p>
                  <Button href="/donation" variant="primary" size="lg" className="w-full rounded-full uppercase tracking-widest text-xs font-bold py-5 shadow-premium">
                    Sponsor this Seva
                  </Button>
                </div>

                <div className="pt-8 border-t border-border/40">
                  <Link href="/request-help" className="flex items-center justify-between group">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">In Need of Help?</h4>
                      <p className="text-xs text-primary/40 font-bold group-hover:text-accent transition-colors">Request assistance here</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                      <span className="text-primary">→</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-primary rounded-[32px] p-8 text-center space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">24/7 Crisis Support</p>
                <a href="tel:+919773992516" className="block text-2xl font-serif font-bold text-white hover:text-accent transition-colors tracking-tight">
                  +91 97739 92516
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
