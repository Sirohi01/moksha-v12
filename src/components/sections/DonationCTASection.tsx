import Button from "@/components/ui/Button";

export default function DonationCTASection() {

  return (
    <section className="py-section bg-accent-soft relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
            Support Our Mission
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            Every Soul deserves a <br />
            <span className="italic font-medium text-accent">Dignified Farewell</span>
          </h2>

          <p className="text-muted text-lg leading-relaxed mb-10 font-medium">
            Your small contribution can provide the sacred final journey that
            every human being deserves. Join us in ensuring that poverty
            never stands in the way of a respectful departure.
          </p>

          <div className="flex flex-col items-center gap-8">
            <Button
              href="/donation"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto !px-16 rounded-full text-sm uppercase tracking-[0.2em] font-bold py-6"
            >
              Donate Now
            </Button>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] font-bold text-primary/40 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                80G Tax Exemption
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                100% Transparency
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Secure Payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

