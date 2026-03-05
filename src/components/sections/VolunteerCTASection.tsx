import Button from "@/components/ui/Button";
import Image from "next/image";

export default function VolunteerCTASection() {
  const benefits = [
    {
      title: "Compassionate Presence",
      desc: "Support families during their most difficult hours",
      img: "/step1.png",
    },
    {
      title: "Logistic Support",
      desc: "Help coordinate ambulance and ritual services",
      img: "/service2.png",
    },
    {
      title: "Dignified Rituals",
      desc: "Assist our priests in performing Vedic final rites",
      img: "/service4.png",
    },
  ];

  const statItems = [
    {
      value: "200+",
      label: "Active Sevaks",
      img: "/step1.png",
    },
    {
      value: "50+",
      label: "Ghats Active",
      img: "/step1.png",
    },
    {
      value: "24/7",
      label: "Response Time",
      img: "/service2.png",
    },
    {
      value: "100%",
      label: "Seva Spirit",
      img: "/service4.png",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Volunteer With Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
              Serve with Compassion & Dignity
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              In the darkness of grief, be the light of support. Join our network
              of volunteers dedicated to providing a dignified final journey to
              every soul.
            </p>
            <div className="space-y-6 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-xl border-2 border-accent/20 shrink-0">
                    <Image
                      src={b.img}
                      alt={b.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-base">
                      {b.title}
                    </div>
                    <div className="text-muted text-sm">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/volunteer" variant="primary" size="lg">
              Join as a Sevak
            </Button>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-2 gap-5">
            {statItems.map((item) => (
              <div
                key={item.label}
                className="bg-background rounded-3xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="relative w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-sm group-hover:border-accent/20 transition-colors">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-serif font-bold text-3xl text-accent mb-1 leading-none">
                  {item.value}
                </div>
                <div className="text-muted text-xs font-medium uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
