import Button from "@/components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image3.png"
          alt="Moksha Seva Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-12">
        <div className="animate-fade-up max-w-3xl text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-full px-6 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(198,167,86,0.8)]"></span>
            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">
              Compassion · Dignity · Selfless Seva
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-semibold text-primary leading-[1.1] mb-8 tracking-tight">
            Dignity in <br />
            <span className="italic text-accent">Departure</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-primary/70 max-w-xl leading-relaxed mb-12 font-medium">
            Providing a peaceful and sacred final journey for underprivileged souls,
            ensuring every life ends with the honor it deserves.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
            <Button
              href="/request-help"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto !px-12 rounded-full text-xs uppercase tracking-widest font-bold"
            >
              Request Help
            </Button>
            <Button
              href="/donation"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto !px-12 rounded-full text-xs uppercase tracking-widest font-bold border-primary/20 text-primary hover:bg-primary hover:text-white"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/60">Scroll</span>

        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );

}
