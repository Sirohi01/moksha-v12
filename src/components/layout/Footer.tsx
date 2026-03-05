import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerLinks } from "@/config/navigation";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, Heart, ShieldCheck, ExternalLink } from "lucide-react";

// Custom Premium Icons (reusing logic from FloatingActions but adapted for footer)
const Icons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
  )
};

export default function Footer() {
  return (
    <footer className="bg-bg-alt pt-16 pb-8 border-t border-border/40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column - Animation: Fade In Up */}
          <div className="lg:col-span-5 space-y-8 animate-fade-up">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white shadow-card p-2 group-hover:shadow-premium group-hover:scale-110 transition-all duration-500">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-primary tracking-tight transition-colors group-hover:text-accent">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent/60 mt-1">
                  Seva Over Self
                </span>
              </div>
            </Link>

            <p className="text-muted text-base leading-relaxed max-w-sm font-medium">
              We believe every soul deserves a dignified departure.
              Our mission is to ensure that poverty never hinders a sacred final journey.
            </p>

            <div className="flex items-center gap-5">
              {Object.entries(siteConfig.socialLinks).map(([platform, url], index) => {
                const IconComponent = Icons[platform.charAt(0).toUpperCase() + platform.slice(1) as keyof typeof Icons] || Icons.Facebook;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/30 hover:text-accent transition-all hover:-translate-y-1.5 w-5 h-5 outline-none"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns - Animation: Staggered Fade In */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">Discover</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-accent transition-all text-sm font-semibold flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-accent transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">Impact</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-accent transition-all text-sm font-semibold flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-accent transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Animation: Fade In Left */}
          <div className="lg:col-span-3 space-y-6 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">Contact</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <MapPin size={18} className="text-accent shrink-0 mt-1 transition-transform group-hover:scale-125" />
                <p className="text-muted text-sm font-medium leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone size={18} className="text-accent shrink-0 transition-transform group-hover:scale-125" />
                <a href={`tel:${siteConfig.phone}`} className="text-primary font-bold hover:text-accent transition-colors text-sm">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <Mail size={18} className="text-accent shrink-0 transition-transform group-hover:scale-125" />
                <a href={`mailto:${siteConfig.email}`} className="text-muted font-semibold hover:text-primary transition-colors text-sm border-b border-border/60 group-hover:border-accent">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {siteConfig.name} Foundation · Registered NGO
          </p>

          <div className="flex items-center gap-8">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.2em] hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

