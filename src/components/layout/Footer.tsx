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
    <footer className="bg-bg-alt pt-16 pb-8 border-t border-border/40 overflow-hidden relative">
      {/* INDIAN ARCHITECTURE BACKGROUND - ACTUAL CODE */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {/* Taj Mahal */}
        <div className="absolute top-10 right-[10%] w-40 h-40 text-primary/20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="35" y="50" width="30" height="25" fill="currentColor" />
            <rect x="25" y="40" width="50" height="10" fill="currentColor" />
            <circle cx="50" cy="30" r="12" fill="currentColor" />
            <rect x="15" y="25" width="8" height="35" fill="currentColor" />
            <rect x="77" y="25" width="8" height="35" fill="currentColor" />
          </svg>
        </div>
        
        {/* Qutub Minar */}
        <div className="absolute bottom-20 left-[15%] w-20 h-48 text-accent/20">
          <svg viewBox="0 0 40 100" className="w-full h-full">
            <rect x="15" y="10" width="10" height="80" fill="currentColor" />
            <circle cx="20" cy="20" r="6" fill="currentColor" />
            <rect x="5" y="35" width="30" height="5" fill="currentColor" />
            <rect x="8" y="55" width="24" height="5" fill="currentColor" />
            <rect x="12" y="75" width="16" height="5" fill="currentColor" />
          </svg>
        </div>
        
        {/* Gateway of India */}
        <div className="absolute top-40 left-[20%] w-44 h-36 text-primary/15">
          <svg viewBox="0 0 120 80" className="w-full h-full">
            <rect x="40" y="40" width="40" height="30" fill="currentColor" />
            <rect x="20" y="25" width="80" height="15" fill="currentColor" />
            <circle cx="60" cy="15" r="8" fill="currentColor" />
          </svg>
        </div>
        
        {/* Lotus Temple */}
        <div className="absolute bottom-40 right-[25%] w-36 h-36 text-accent/15">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 20 L65 40 L80 40 L68 55 L75 75 L50 60 L25 75 L32 55 L20 40 L35 40 Z" fill="currentColor" />
          </svg>
        </div>
        
        {/* Hawa Mahal */}
        <div className="absolute top-60 right-[40%] w-48 h-32 text-primary/15">
          <svg viewBox="0 0 140 70" className="w-full h-full">
            {[...Array(7)].map((_, i) => (
              <rect key={i} x={15 + i * 18} y="20" width="8" height="30" fill="currentColor" />
            ))}
            <rect x="10" y="50" width="120" height="8" fill="currentColor" />
            {[...Array(7)].map((_, i) => (
              <circle key={i} cx={19 + i * 18} cy="35" r="3" fill="currentColor" />
            ))}
          </svg>
        </div>
        
        {/* India Gate */}
        <div className="absolute bottom-10 right-[15%] w-40 h-32 text-accent/15">
          <svg viewBox="0 0 100 70" className="w-full h-full">
            <rect x="30" y="30" width="40" height="30" fill="currentColor" />
            <rect x="15" y="20" width="70" height="10" fill="currentColor" />
            <circle cx="50" cy="12" r="6" fill="currentColor" />
          </svg>
        </div>
        
        {/* Mysore Palace */}
        <div className="absolute top-20 left-[40%] w-44 h-32 text-primary/15">
          <svg viewBox="0 0 120 60" className="w-full h-full">
            {[...Array(5)].map((_, i) => (
              <circle key={i} cx={30 + i * 20} cy="25" r="6" fill="currentColor" />
            ))}
            <rect x="15" y="30" width="90" height="20" fill="currentColor" />
          </svg>
        </div>

        {/* Konark Sun Temple Wheel */}
        <div className="absolute bottom-32 left-[35%] w-24 h-24 text-accent/15">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
            {[...Array(8)].map((_, i) => (
              <line 
                key={i} 
                x1="50" y1="50" 
                x2={50 + 35 * Math.cos(i * Math.PI/4)} 
                y2={50 + 35 * Math.sin(i * Math.PI/4)} 
                stroke="currentColor" 
                strokeWidth="2" 
              />
            ))}
          </svg>
        </div>

        {/* Charminar */}
        <div className="absolute top-32 left-[60%] w-28 h-36 text-primary/15">
          <svg viewBox="0 0 60 80" className="w-full h-full">
            <rect x="20" y="30" width="20" height="30" fill="currentColor" />
            <rect x="5" y="20" width="50" height="10" fill="currentColor" />
            <rect x="5" y="60" width="50" height="5" fill="currentColor" />
            <circle cx="30" cy="15" r="5" fill="currentColor" />
          </svg>
        </div>

        {/* Golden Temple */}
        <div className="absolute bottom-60 left-[55%] w-36 h-32 text-accent/15">
          <svg viewBox="0 0 80 70" className="w-full h-full">
            <rect x="25" y="30" width="30" height="25" fill="currentColor" />
            <rect x="15" y="20" width="50" height="10" fill="currentColor" />
            <circle cx="40" cy="15" r="8" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Geometric Pattern Overlay - Mehndi Style */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 15px 15px, currentColor 1px, transparent 1px), 
                           linear-gradient(45deg, transparent 46%, currentColor 46%, currentColor 54%, transparent 54%)`,
          backgroundSize: '60px 60px, 30px 30px',
          color: 'var(--primary)'
        }} />
      </div>

      {/* Tricolor Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="w-1/3 h-full bg-[#FF9933]" /> {/* Saffron */}
        <div className="w-1/3 h-full bg-[#FFFFFF]" /> {/* White */}
        <div className="w-1/3 h-full bg-[#138808]" /> {/* Green */}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
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
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/30 hover:text-accent transition-all hover:-translate-y-1.5 w-5 h-5 outline-none"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
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