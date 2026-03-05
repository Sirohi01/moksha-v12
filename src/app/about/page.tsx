import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Moksha Seva's mission, values, history, and the team behind India's trusted humanitarian NGO.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  { icon: "🙏", title: "Dignity", desc: "Every person deserves to be served with respect, regardless of their circumstances." },
  { icon: "💛", title: "Compassion", desc: "We lead with empathy, not charity. We see people, not cases." },
  { icon: "📊", title: "Transparency", desc: "Every rupee is accounted for. We publish full financial reports annually." },
  { icon: "🌱", title: "Sustainability", desc: "We build systems that empower communities to thrive independently." },
  { icon: "🤝", title: "Inclusiveness", desc: "Our seva knows no caste, religion, gender, or geography." },
  { icon: "⚡", title: "Urgency", desc: "When someone needs help, we move fast. Every hour matters." },
];

const team = [
  { name: "Dr. Rajeev Sharma", role: "Founder & Executive Director", avatar: "R" },
  { name: "Anjali Menon", role: "Head of Relief Operations", avatar: "A" },
  { name: "Deepak Verma", role: "Education Program Director", avatar: "D" },
  { name: "Dr. Priya Nair", role: "Medical Programs Lead", avatar: "P" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-background border-b border-slate-100">
        <div className="container-max max-w-3xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            Born from Compassion, <br />Built on Trust
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Moksha Seva was founded in 2015 in a small room in Varanasi, with
            nothing but a mission to serve those who had fallen through every
            crack in the system. Today, we operate across 18 states, touching
            over 1.2 lakh lives annually.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Mission"
                title="Why We Exist"
                subtitle="Moksha Seva exists to ensure that no one in India faces hunger, disease, or illiteracy without a hand reaching out to help."
                className="mb-7"
              />
              <p className="text-muted leading-relaxed mb-5">
                The name &quot;Moksha Seva&quot; means &quot;service that liberates&quot; — a deep
                belief that dignified service to others is the highest form of
                spiritual and social practice. We are not just an NGO. We are a
                movement.
              </p>
              <p className="text-muted leading-relaxed">
                We do not see our beneficiaries as recipients of charity. We see
                them as people temporarily in need of a bridge — a bridge that
                can take them from crisis to stability, from dependency to
                dignity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { year: "2015", event: "Founded in Varanasi" },
                { year: "2017", event: "Expanded to 5 states" },
                { year: "2019", event: "1 lakh lives milestone" },
                { year: "2024", event: "Operating in 18 states" },
              ].map((item) => (
                <Card key={item.year} className="p-5 text-center">
                  <div className="text-2xl font-serif font-bold text-accent mb-1">
                    {item.year}
                  </div>
                  <div className="text-sm text-muted">{item.event}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            eyebrow="What Guides Us"
            title="Our Core Values"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.title} hover className="p-6">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="font-serif font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            eyebrow="The People"
            title="Leadership Team"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="p-6 text-center">
                <div className="w-16 h-16 bg-primary text-accent font-serif font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-serif font-bold text-primary text-base mb-1">
                  {member.name}
                </h3>
                <p className="text-muted text-sm">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-max max-w-xl">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-slate-400 mb-8">
            Every volunteer, every donor, every well-wisher becomes part of the
            Moksha Seva family. Join us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/volunteer" variant="primary">
              Volunteer
            </Button>
            <Button href="/donation" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Donate
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
