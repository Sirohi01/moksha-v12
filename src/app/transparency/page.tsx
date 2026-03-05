import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Transparency & Impact",
  description: "Full transparency on how Moksha Seva uses donations and our annual impact.",
  alternates: { canonical: `${siteConfig.url}/transparency` },
};

const annualReports = [
  { year: "2023-24", link: "#", highlights: ["₹2.4 Cr raised", "89,000 beneficiaries", "12 states"] },
  { year: "2022-23", link: "#", highlights: ["₹1.8 Cr raised", "67,000 beneficiaries", "10 states"] },
  { year: "2021-22", link: "#", highlights: ["₹1.2 Cr raised", "45,000 beneficiaries", "8 states"] },
];

const programBreakdown = [
  { program: "Food Relief", allocation: 30, beneficiaries: "50K+ monthly", icon: "🍱" },
  { program: "Education", allocation: 22, beneficiaries: "1,200 students", icon: "📚" },
  { program: "Healthcare", allocation: 20, beneficiaries: "12K patients/year", icon: "🏥" },
  { program: "Disaster Relief", allocation: 15, beneficiaries: "Context-based", icon: "🆘" },
  { program: "Women Empowerment", allocation: 8, beneficiaries: "800+ women", icon: "👩‍🦱" },
  { program: "Elderly Care", allocation: 5, beneficiaries: "500+ elders", icon: "👴" },
];

export default function TransparencyPage() {
  return (
    <>
      <section className="section-padding bg-background border-b border-slate-100">
        <div className="container-max max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Accountability</p>
          <h1 className="text-5xl font-serif font-bold text-primary mb-4 leading-tight">
            Transparency & Impact
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            We believe in full transparency. Every rupee donated is accounted
            for. Here is how we use your contributions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max space-y-14">
          {/* Fund utilization */}
          <div>
            <SectionHeader eyebrow="Financials" title="How We Use Your Donations" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { pct: "90%", label: "Programs & Direct Aid", desc: "Food, medicines, scholarships, relief", color: "bg-accent" },
                { pct: "7%", label: "Administration", desc: "Salaries, office, compliance", color: "bg-slate-300" },
                { pct: "3%", label: "Fundraising", desc: "Donor outreach, campaigns", color: "bg-slate-200" },
              ].map(item => (
                <Card key={item.label} className="p-6 text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold font-serif text-sm">{item.pct}</span>
                  </div>
                  <p className="font-serif font-bold text-primary mb-1">{item.label}</p>
                  <p className="text-muted text-xs">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Program breakdown */}
          <div>
            <SectionHeader eyebrow="Allocation" title="Program-wise Fund Allocation" className="mb-8" />
            <div className="space-y-4">
              {programBreakdown.map(item => (
                <div key={item.program} className="flex items-center gap-4">
                  <div className="w-8 text-xl shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-primary">{item.program}</span>
                      <span className="text-xs text-muted">{item.beneficiaries}</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${item.allocation}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-primary w-10 text-right shrink-0">
                    {item.allocation}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annual reports */}
          <div>
            <SectionHeader eyebrow="Reports" title="Annual Reports" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {annualReports.map(report => (
                <Card key={report.year} hover className="p-6">
                  <p className="font-serif font-bold text-2xl text-accent mb-1">{report.year}</p>
                  <p className="text-xs text-muted font-semibold mb-3 uppercase tracking-wide">Annual Report</p>
                  <ul className="space-y-1.5 mb-4">
                    {report.highlights.map(h => (
                      <li key={h} className="text-xs text-muted flex items-center gap-1.5">
                        <span className="text-accent">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                  <a href={report.link} className="text-sm text-accent font-semibold hover:underline">
                    Download PDF →
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionHeader eyebrow="Legal" title="Registrations & Certifications" className="mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "12A Registration", desc: "Income Tax Act" },
                { label: "80G Certification", desc: "Donor Tax Benefit" },
                { label: "FCRA License", desc: "Foreign Contributions" },
                { label: "NGO Darpan", desc: "NITI Aayog Registered" },
              ].map(cert => (
                <Card key={cert.label} className="p-4 text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <p className="font-semibold text-primary text-sm">{cert.label}</p>
                  <p className="text-xs text-muted">{cert.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
