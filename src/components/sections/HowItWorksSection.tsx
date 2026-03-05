import { howItWorks } from "@/config/stats";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { PhoneCall, Truck, Heart } from "lucide-react";

export default function HowItWorksSection() {
  const icons = [
    <PhoneCall key="phone" className="w-8 h-8" />,
    <Truck key="truck" className="w-8 h-8" />,
    <Heart key="heart" className="w-8 h-8" />,
  ];

  return (
    <section className="py-section bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeader
          eyebrow="Our Process"
          title="Compassion in Three Steps"
          subtitle="Helping families navigate their most difficult moments with dignity and ease."
          centered
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {howItWorks.map((step, index) => (
            <div key={step.step} className="group text-center">
              <div className="flex flex-col items-center">
                {/* Icon Container */}
                <div className="w-24 h-24 rounded-full bg-accent-soft flex items-center justify-center mb-10 group-hover:bg-accent transition-all duration-500 relative">
                  <div className="absolute inset-0 rounded-full border border-accent/20 scale-125 group-hover:scale-100 transition-transform duration-500" />
                  <div className="text-accent group-hover:text-white transition-colors duration-500">
                    {icons[index]}
                  </div>
                </div>

                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-4">
                  Step 0{step.step}
                </div>

                <h3 className="font-serif text-3xl font-semibold text-primary mb-6 leading-tight">
                  {step.title}
                </h3>

                <p className="text-muted text-base leading-relaxed max-w-[280px] mx-auto font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

