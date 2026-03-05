"use client";

import { useState } from "react";
import { cn } from "@/utils";
import Button from "@/components/ui/Button";

const STEPS = ["Contact Details", "Service Required", "Final Details"];

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  helpType: string;
  urgency: string;
  description: string;
  familySize: string;
  additionalInfo: string;
}

const initialData: FormData = {
  name: "",
  phone: "",
  email: "",
  city: "",
  state: "",
  helpType: "",
  urgency: "",
  description: "",
  familySize: "",
  additionalInfo: "",
};

const helpTypes = [
  "Free Cremation Seva",
  "Free Dead Body Ambulance",
  "Final Rites Material",
  "Ritual & Priest Support",
  "Post-Cremation Support",
  "Donation/Memorial Help",
];

const indianStates = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Gujarat",
  "Haryana", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Other",
];

export default function RequestHelpPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = () => {
    const newErrors: Partial<FormData> = {};
    if (step === 0) {
      if (!data.name.trim()) newErrors.name = "Name is required";
      if (!data.phone.trim()) newErrors.phone = "Phone is required";
      if (!data.city.trim()) newErrors.city = "City is required";
      if (!data.state) newErrors.state = "State is required";
    }
    if (step === 1) {
      if (!data.helpType) newErrors.helpType = "Please select type of help needed";
      if (!data.urgency) newErrors.urgency = "Please select urgency level";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => s + 1); };
  const back = () => setStep((s) => s - 1);
  const submit = () => { if (validateStep()) setSubmitted(true); };

  if (submitted) {
    return (
      <section className="py-24 bg-background min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8 animate-fade-up">
          <div className="w-24 h-24 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-10">
            <span className="text-4xl">🙏</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary">
            Request Received
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            Thank you, <strong>{data.name}</strong>. Our seva team has been notified.
            We will contact you on <strong>{data.phone}</strong> immediately.
          </p>
          <div className="pt-10">
            <Button href="/" variant="primary" size="lg" className="rounded-full">
              Return Home
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero - More compact */}
      <section className="py-16 bg-accent-soft border-b border-accent/10">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-md rounded-full text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4 border border-accent/20">
            Support Seva
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-primary mb-4">
            Request Help
          </h1>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            Please share details for assistance. We are here to support you with dignity.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="bg-white rounded-[32px] shadow-premium border border-border/40 p-6 lg:p-10">

            {/* Compact Progress Indicator */}
            <div className="relative mb-16 px-4 md:px-20">
              <div className="absolute top-1.5 left-10 md:left-28 right-10 md:right-28 h-[1px] bg-border/40" />
              <div className="flex items-center justify-between relative z-10">
                {STEPS.map((s, i) => (
                  <div key={s} className="flex flex-col items-center gap-3">
                    <div className={cn(
                      "w-3 h-3 rounded-full transition-all duration-500 relative bg-white border-2 z-10",
                      i <= step ? "bg-accent border-accent scale-110 shadow-[0_0_10px_rgba(198,167,86,0.5)]" : "bg-white border-border/60"
                    )}>
                      {i === step && <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />}
                    </div>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap",
                      i === step ? "text-primary bg-primary/5 shadow-sm" : "text-primary/30"
                    )}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Steps */}
            <div className="min-h-[300px]">
              {step === 0 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Full Name</label>
                      <input
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary text-sm font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none"
                        placeholder="Contact person name"
                        value={data.name}
                        onChange={e => update("name", e.target.value)}
                      />
                      {errors.name && <p className="text-accent text-[9px] uppercase font-bold tracking-wider">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Phone Number</label>
                      <input
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary text-sm font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none"
                        placeholder="Active mobile number"
                        value={data.phone}
                        onChange={e => update("phone", e.target.value)}
                      />
                      {errors.phone && <p className="text-accent text-[9px] uppercase font-bold tracking-wider">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest">City</label>
                      <input
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary text-sm font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none"
                        placeholder="Village / Town / City"
                        value={data.city}
                        onChange={e => update("city", e.target.value)}
                      />
                      {errors.city && <p className="text-accent text-[9px] uppercase font-bold tracking-wider">{errors.city}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest">State</label>
                      <div className="relative">
                        <select
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary text-sm font-semibold focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none appearance-none"
                          value={data.state}
                          onChange={e => update("state", e.target.value)}
                        >
                          <option value="">Select State</option>
                          {indianStates.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/30">
                          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                      {errors.state && <p className="text-accent text-[9px] uppercase font-bold tracking-wider">{errors.state}</p>}
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block text-center">Type of Seva Required</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {helpTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => update("helpType", type)}
                          className={cn(
                            "px-4 py-4 rounded-xl text-[10px] font-bold tracking-tight transition-all duration-300 text-center border-2 leading-tight",
                            data.helpType === type
                              ? "bg-accent border-accent text-primary shadow-premium scale-105"
                              : "bg-bg-alt border-transparent text-primary/60 hover:bg-accent-soft"
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    {errors.helpType && <p className="text-accent text-[9px] uppercase font-bold tracking-wider text-center">{errors.helpType}</p>}
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block text-center">Urgency Level</label>
                    <div className="flex flex-wrap justify-center gap-3">
                      {[
                        { value: "immediate", label: "Immediate" },
                        { value: "soon", label: "Soon (24h)" },
                        { value: "planned", label: "Planned" },
                        { value: "flexible", label: "Inquiry" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => update("urgency", opt.value)}
                          className={cn(
                            "px-6 py-3 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all duration-300 border-2",
                            data.urgency === opt.value
                              ? "bg-primary border-primary text-white shadow-lg"
                              : "bg-bg-alt border-transparent text-primary/40 hover:bg-border/20"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {errors.urgency && <p className="text-accent text-[9px] uppercase font-bold tracking-wider text-center">{errors.urgency}</p>}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Additional Details</label>
                    <textarea
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-primary text-sm font-semibold placeholder:text-slate-400 focus:bg-white focus:border-accent/40 focus:shadow-[0_0_20px_rgba(198,167,86,0.1)] transition-all duration-300 outline-none resize-none h-32"
                      placeholder="Share any special requests..."
                      value={data.description}
                      onChange={e => update("description", e.target.value)}
                    />
                  </div>

                  <div className="p-6 bg-accent-soft rounded-2xl border border-accent/10">
                    <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent mb-4">Verification Summary</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-[8px] font-bold text-primary/30 uppercase tracking-widest">Contact</p>
                        <p className="text-xs font-bold text-primary">{data.name}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[8px] font-bold text-primary/30 uppercase tracking-widest">Service</p>
                        <p className="text-xs font-bold text-primary">{data.helpType || "—"}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[8px] font-bold text-primary/30 uppercase tracking-widest">Phone</p>
                        <p className="text-xs font-bold text-primary">{data.phone}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[8px] font-bold text-primary/30 uppercase tracking-widest">Location</p>
                        <p className="text-xs font-bold text-primary">{data.city}, {data.state}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-border/40">
              <button
                onClick={back}
                disabled={step === 0}
                className={cn(
                  "text-[9px] font-bold uppercase tracking-[0.2em] transition-all",
                  step === 0 ? "opacity-0 pointer-events-none" : "text-primary/40 hover:text-primary"
                )}
              >
                ← Prev
              </button>

              <div className="flex gap-4">
                {step < STEPS.length - 1 ? (
                  <Button onClick={next} variant="primary" size="md" className="rounded-full !px-8 py-3 text-[10px] font-bold uppercase tracking-widest">
                    Next Step
                  </Button>
                ) : (
                  <Button onClick={submit} variant="primary" size="md" className="rounded-full !px-10 py-3 text-[10px] font-bold uppercase tracking-widest">
                    Submit Request
                  </Button>
                )}
              </div>
            </div>

          </div>

          <div className="mt-12 text-center text-muted text-xs font-medium">
            🆘 For immediate ambulance or emergency support, call our 24/7 helpline: <a href="tel:+919773992516" className="text-accent font-bold hover:underline">+91 97739 92516</a>
          </div>
        </div>
      </section>
    </div>
  );
}
