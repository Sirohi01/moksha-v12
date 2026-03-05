"use client";

import { useState } from "react";

const skills = [
  "Medical / Healthcare", "Teaching / Education", "Social Work", "IT / Tech",
  "Legal Aid", "Photography / Media", "Cooking / Food", "Driving / Logistics",
  "Fundraising", "Community Outreach", "Other",
];

export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "", state: "",
    selectedSkills: [] as string[], availability: "", motivation: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const toggleSkill = (skill: string) => {
    setForm(prev => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter(s => s !== skill)
        : [...prev.selectedSkills, skill],
    }));
  };

  const submit = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.motivation.trim()) newErrors.motivation = "Required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background min-h-screen">
        <div className="container-max max-w-lg text-center">
          <div className="text-6xl mb-5">🌟</div>
          <h1 className="text-3xl font-serif font-bold text-primary mb-3">
            Welcome to the Seva Family!
          </h1>
          <p className="text-muted text-lg mb-6">
            Thank you, <strong>{form.name}</strong>. We have received your application. Our volunteer coordinator will reach you at <strong>{form.phone}</strong> within 3 working days.
          </p>
          <p className="text-sm text-muted">
            In the meantime, follow us on social media for volunteer updates and training opportunities.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-padding bg-background border-b border-slate-100">
        <div className="container-max max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Join Us
          </p>
          <h1 className="text-5xl font-serif font-bold text-primary mb-4 leading-tight">
            Become a Volunteer
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Your time, skills, and heart can transform lives. Join our 500+
            volunteer network across 18 states.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-xl space-y-5">
          <h2 className="text-2xl font-serif font-bold text-primary">
            Volunteer Application
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Full Name *</label>
              <input className="input-field" placeholder="Your name" value={form.name} onChange={e => update("name", e.target.value)} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="label">Email *</label>
              <input className="input-field" type="email" placeholder="your@email.com" value={form.email} onChange={e => update("email", e.target.value)} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Phone *</label>
              <input className="input-field" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => update("phone", e.target.value)} />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="label">City *</label>
              <input className="input-field" placeholder="Your city" value={form.city} onChange={e => update("city", e.target.value)} />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
          </div>

          <div>
            <label className="label">Skills / Expertise</label>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                    form.selectedSkills.includes(skill)
                      ? "border-accent bg-accent-light text-primary"
                      : "border-slate-200 text-muted hover:border-slate-300"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="label">Availability</label>
            <select className="input-field" value={form.availability} onChange={e => update("availability", e.target.value)}>
              <option value="">Select availability</option>
              <option>Weekends only</option>
              <option>Weekdays only</option>
              <option>Flexible / Any time</option>
              <option>Full-time commitment</option>
              <option>Emergency response only</option>
            </select>
          </div>

          <div>
            <label className="label">Why Do You Want to Volunteer? *</label>
            <textarea
              className="input-field resize-none"
              rows={4}
              placeholder="Tell us about your motivation, experience, and how you'd like to contribute..."
              value={form.motivation}
              onChange={e => update("motivation", e.target.value)}
            />
            {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation}</p>}
          </div>

          <button onClick={submit} className="btn-primary w-full py-4">
            🌟 Submit Application
          </button>
        </div>
      </section>
    </>
  );
}
