"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import Button from "@/components/ui/Button";
import { Check, Printer, Download, Share2, ShieldCheck, Heart, ArrowRight } from "lucide-react";

const donationTiers = [
  { amount: 500, label: "Ritual Support", impact: "Traditional samagri for one family", icon: "✨" },
  { amount: 1500, label: "Ambulance Seva", impact: "Fuel for 5 emergency trips", icon: "🚑" },
  { amount: 3500, label: "Sacred Journey", impact: "Complete wood cremation sponsorship", icon: "🔥", popular: true },
  { amount: 10000, label: "Legacy of Care", impact: "Full support for 3 families", icon: "🕊️" },
];

export default function DonationPage() {
  const [step, setStep] = useState<"amount" | "details" | "receipt">("amount");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(3500);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
  });

  const receiptRef = useRef<HTMLDivElement>(null);

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  const handleNextToDetails = () => {
    if (!finalAmount || finalAmount < 10) return;
    setStep("details");
  };

  const handleFinishDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("receipt");
  };

  const handlePrint = () => {
    window.print();
  };

  if (step === "receipt") {
    return (
      <section className="py-12 bg-bg-alt min-h-screen">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-premium border border-border/40 print:shadow-none print:border-none" id="receipt" ref={receiptRef}>
            {/* Receipt Header */}
            <div className="bg-primary p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Heart className="w-8 h-8 fill-primary text-primary" />
              </div>
              <h1 className="text-white text-2xl font-serif font-semibold">Donation Receipt</h1>
              <p className="text-white/60 text-xs uppercase tracking-widest">Moksha Seva Foundation • Registered NGO</p>
            </div>

            {/* Receipt Body */}
            <div className="p-8 lg:p-12 space-y-10">
              <div className="text-center space-y-2">
                <p className="text-muted text-sm font-medium">Thank you for your generous contribution</p>
                <div className="text-5xl font-serif font-bold text-primary">₹{finalAmount?.toLocaleString()}</div>
                <div className="inline-block px-4 py-1.5 bg-accent-soft rounded-full text-[10px] font-bold text-accent uppercase tracking-widest">
                  80G Tax Exempted
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-border/40">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-muted uppercase tracking-widest">Donors Name</p>
                  <p className="text-sm font-bold text-primary">{formData.name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-muted uppercase tracking-widest">Receipt Number</p>
                  <p className="text-sm font-bold text-primary">MSF-{Math.floor(100000 + Math.random() * 900000)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-muted uppercase tracking-widest">Email Address</p>
                  <p className="text-sm font-bold text-primary">{formData.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-muted uppercase tracking-widest">PAN Number</p>
                  <p className="text-sm font-bold text-primary uppercase">{formData.pan}</p>
                </div>
                <div className="col-span-2 space-y-1">
                  <p className="text-[9px] font-bold text-muted uppercase tracking-widest">Permanent Address</p>
                  <p className="text-sm font-bold text-primary">{formData.address}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-bg-alt rounded-2xl">
                  <ShieldCheck className="text-accent w-6 h-6 shrink-0" />
                  <p className="text-[11px] text-muted leading-relaxed">
                    This receipt is generated electronically. You will receive a signed copy and 80G certificate on your registered email within 24 hours.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.3em]">www.mokshaseva.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Receipt Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-premium"
            >
              <Printer size={16} />
              Print Receipt
            </button>
            <Button href="/" variant="outline" className="rounded-full !px-8">
              Back to Home
            </Button>
          </div>
        </div>

        <style jsx global>{`
          @media print {
            body { 
              background: white !important; 
              margin: 0 !important; 
              padding: 0 !important; 
            }
            body > *:not(main) { display: none !important; }
            main > *:not(section:has(#receipt)) { display: none !important; }
            section { padding: 0 !important; margin: 0 !important; }
            #receipt {
              position: static !important;
              width: 100% !important;
              max-width: 100% !important;
              border: none !important;
              box-shadow: none !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .print\\:hidden { display: none !important; }
          }
        `}</style>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero - More compact */}
      <section className="py-16 bg-accent-soft border-b border-accent/10">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-md rounded-full text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4 border border-accent/20">
            Sponsor a Seva
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-primary mb-4">
            Dignity in Departure
          </h1>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            Your contribution directly funds the final traditional rites of underprivileged families.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="bg-white rounded-[32px] shadow-premium border border-border/40 p-6 lg:p-12">

            {/* Progress Indicator */}
            <div className="relative mb-16 px-4 md:px-32">
              <div className="absolute top-1.5 left-8 md:left-[11rem] right-8 md:right-[11rem] h-[1px] bg-border/40" />
              <div className="flex items-center justify-between relative z-10">
                {[
                  { id: "amount", label: "Contribution" },
                  { id: "details", label: "Billing" },
                  { id: "receipt", label: "Receipt" }
                ].map((s, i) => (
                  <div key={s.id} className="flex flex-col items-center gap-3">
                    <div className={cn(
                      "w-3 h-3 rounded-full transition-all duration-500 relative z-10 bg-white border-2",
                      (step === s.id || (step === "details" && i === 0))
                        ? "bg-accent border-accent scale-110 shadow-[0_0_10px_rgba(198,167,86,0.5)]"
                        : "bg-white border-border/60"
                    )}>
                      {step === s.id && <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />}
                    </div>
                    <span className={cn(
                      "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap",
                      step === s.id ? "text-primary bg-primary/5 shadow-sm" : "text-primary/30"
                    )}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {step === "amount" && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center space-y-2">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Step 1: Choose Amount</h2>
                  <p className="text-muted text-sm font-medium">Select a tier or enter your own contribution</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {donationTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(""); }}
                      className={cn(
                        "relative p-6 rounded-[24px] border-2 text-center transition-all duration-500 group",
                        selectedAmount === tier.amount && !customAmount
                          ? "bg-accent/10 border-accent shadow-[0_10px_30px_rgba(198,167,86,0.1)]"
                          : "bg-bg-alt border-transparent hover:bg-accent-soft"
                      )}
                    >
                      {tier.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[7px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                          Most Impact
                        </span>
                      )}
                      <div className="text-2xl mb-4 group-hover:scale-110 transition-transform">{tier.icon}</div>
                      <div className="text-xl font-serif font-bold text-primary mb-1">₹{tier.amount.toLocaleString()}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-primary/40 mb-3">{tier.label}</div>
                      <div className="text-[10px] font-medium text-primary opacity-70 line-clamp-2 leading-relaxed">{tier.impact}</div>
                    </button>
                  ))}
                </div>

                <div className="max-w-md mx-auto space-y-8 pt-4">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block text-center">Custom Amount (₹)</label>
                    <input
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-center text-3xl font-serif font-bold text-primary placeholder:text-slate-300 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_30px_rgba(198,167,86,0.15)] transition-all duration-300 outline-none"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    />
                  </div>
                  <Button
                    onClick={handleNextToDetails}
                    disabled={!finalAmount || finalAmount < 10}
                    variant="primary"
                    size="lg"
                    className="w-full rounded-full py-5 font-bold uppercase tracking-widest text-xs shadow-premium"
                  >
                    Continue to Details <ArrowRight size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {step === "details" && (
              <form onSubmit={handleFinishDonation} className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="text-center space-y-2">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Step 2: Billing Details</h2>
                  <p className="text-muted text-sm font-medium">Required for 80G tax exemption certificate</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Full Name</label>
                    <input
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none"
                      placeholder="As per PAN card"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none"
                      placeholder="For receipt delivery"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Phone Number</label>
                    <input
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">PAN Number</label>
                    <input
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none uppercase"
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      value={formData.pan}
                      onChange={e => setFormData({ ...formData, pan: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Full Address</label>
                    <textarea
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none resize-none h-24"
                      placeholder="Required for legal compliance"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border/40">
                  <button
                    type="button"
                    onClick={() => setStep("amount")}
                    className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-all"
                  >
                    ← Back to Amount
                  </button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="rounded-full !px-12 py-5 font-bold uppercase tracking-widest text-xs shadow-premium"
                  >
                    Complete Donation (₹{finalAmount})
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-8 flex justify-center gap-8 text-[9px] font-bold text-primary/30 uppercase tracking-widest">
            <span className="flex items-center gap-2"><ShieldCheck size={12} className="text-accent" /> 256-bit SSL Secure</span>
            <span className="flex items-center gap-2"><Heart size={12} className="text-accent" /> 100% Transparency</span>
          </div>
        </div>
      </section>

      {/* Impact Statistics - More compact */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-premium">
              <Image
                src="/images/impact.png"
                alt="Donation Impact"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
                Transparency
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
                Where your <br />
                <span className="italic font-medium text-accent">Kindness goes</span>
              </h2>
              <div className="space-y-6 pt-4">
                {[
                  { label: "Cremation & Rituals", pct: 90 },
                  { label: "Ambulance Maintenance", pct: 7 },
                  { label: "Administration", pct: 3 },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{item.label}</span>
                      <span className="text-base font-serif font-bold text-accent">{item.pct}%</span>
                    </div>
                    <div className="h-[1px] w-full bg-border/40 italic">
                      <div className="h-full bg-accent" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
