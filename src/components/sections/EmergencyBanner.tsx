import Button from "@/components/ui/Button";

export default function EmergencyBanner() {
  return (
    <section className="bg-accent-soft border-y border-accent/20 py-5 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-3 font-semibold text-primary tracking-widest uppercase text-xs">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></span>
          24/7 Support Helpline
        </div>
        <p className="text-sm font-medium text-primary/80">
          Immediate ambulance or cremation assistance:{" "}
          <a href="tel:+919773992516" className="font-semibold underline text-accent decoration-accent/30 underline-offset-4 hover:decoration-accent transition-all">
            +91 97739 92516
          </a>
        </p>

      </div>
    </section>
  );
}
