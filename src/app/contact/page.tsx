"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const submit = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.message.trim()) newErrors.message = "Required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  return (
    <>
      <section className="section-padding bg-background border-b border-slate-100">
        <div className="container-max max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-5xl font-serif font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-muted text-lg">
            Have a question, partnership inquiry, or just want to connect? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">✉️</div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-2">Message Sent!</h2>
                  <p className="text-muted">We will get back to you at <strong>{form.email}</strong> within 2 business days.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }} className="mt-4 text-sm text-accent hover:underline">Send another message</button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Name *</label>
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
                      <label className="label">Phone (Optional)</label>
                      <input className="input-field" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => update("phone", e.target.value)} />
                    </div>
                    <div>
                      <label className="label">Subject</label>
                      <select className="input-field" value={form.subject} onChange={e => update("subject", e.target.value)}>
                        <option value="">Select subject</option>
                        <option>General Inquiry</option>
                        <option>Donation / Fundraising</option>
                        <option>Volunteer Query</option>
                        <option>Media / Press</option>
                        <option>Partnership</option>
                        <option>Feedback</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label">Message *</label>
                    <textarea className="input-field resize-none" rows={5} placeholder="Write your message here..." value={form.message} onChange={e => update("message", e.target.value)} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button onClick={submit} className="btn-primary w-full py-4">Send Message</button>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                { icon: "📍", title: "Address", content: siteConfig.address },
                { icon: "📞", title: "Phone", content: siteConfig.phone },
                { icon: "✉️", title: "Email", content: siteConfig.email },
              ].map(item => (
                <div key={item.title} className="bg-background rounded-2xl p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-semibold text-primary text-sm mb-1">{item.title}</p>
                  <p className="text-muted text-sm">{item.content}</p>
                </div>
              ))}
              <div className="bg-primary rounded-2xl p-5 text-white">
                <p className="font-semibold text-sm mb-1">🆘 Emergency Helpline</p>
                <a href="tel:1800123456" className="text-2xl font-bold text-accent block mb-1">1800-123-456</a>
                <p className="text-slate-400 text-xs">Free · Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
