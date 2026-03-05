"use client";

import { useState } from "react";
import { cn } from "@/utils";

const faqs = [
  {
    category: "About Us",
    items: [
      { q: "What is Moksha Seva?", a: "Moksha Seva is a registered non-profit organization working across 18 Indian states to provide food relief, education, healthcare, disaster response, women empowerment, and elderly care." },
      { q: "When was Moksha Seva founded?", a: "Moksha Seva was founded in 2015 in Varanasi, Uttar Pradesh, and has since grown into a pan-India humanitarian organization." },
      { q: "Is Moksha Seva a registered NGO?", a: "Yes. Moksha Seva is registered under the Societies Registration Act and holds 12A and 80G certifications under the Income Tax Act." },
    ],
  },
  {
    category: "Donations",
    items: [
      { q: "Is my donation tax-deductible?", a: "Yes. Donations to Moksha Seva qualify for 50% deduction under Section 80G of the Income Tax Act. You will receive a certificate within 7 working days." },
      { q: "How much of my donation reaches the beneficiaries?", a: "90% of all donations are allocated to direct program expenses. We keep administrative costs below 10%." },
      { q: "Can I donate online?", a: "Yes. We accept online donations via UPI, credit/debit cards, and net banking through our secure Razorpay payment gateway." },
      { q: "Can I donate in kind?", a: "Yes. We accept food, clothing, medicines, books, and other goods. Please contact us before sending to coordinate logistics." },
    ],
  },
  {
    category: "Volunteering",
    items: [
      { q: "Who can volunteer?", a: "Anyone above 18 years of age with a spirit of service can volunteer. We welcome professionals, students, retirees, and homemakers." },
      { q: "Do I need prior experience?", a: "No prior experience is required for most roles. We provide training and orientation for all new volunteers." },
      { q: "Can I volunteer remotely?", a: "Yes. We have opportunities for remote volunteers in content writing, graphic design, data entry, research, and social media." },
    ],
  },
  {
    category: "Getting Help",
    items: [
      { q: "How do I request help?", a: "You can fill our online Request Help form, call our helpline at 1800-123-456, or visit our nearest seva center." },
      { q: "How quickly do you respond?", a: "We respond to all requests within 24 hours on business days. Emergency cases are prioritized and addressed within hours." },
      { q: "Is there any eligibility criteria for help?", a: "We serve anyone genuinely in need, regardless of caste, religion, gender, or income level. Our only criterion is genuine need." },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <section className="section-padding bg-background border-b border-slate-100">
        <div className="container-max max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Help Center</p>
          <h1 className="text-5xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-muted text-lg">Everything you need to know about Moksha Seva.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl space-y-10">
          {faqs.map((group) => (
            <div key={group.category}>
              <h2 className="text-xl font-serif font-bold text-primary mb-4">{group.category}</h2>
              <div className="space-y-2">
                {group.items.map((item, i) => {
                  const key = `${group.category}-${i}`;
                  const open = openItem === key;
                  return (
                    <div key={key} className="border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-slate-50 transition-colors"
                        onClick={() => setOpenItem(open ? null : key)}
                      >
                        <span className="font-medium text-primary text-sm pr-4">{item.q}</span>
                        <span className={cn("text-muted shrink-0 transition-transform duration-200", open && "rotate-180")}>
                          ▼
                        </span>
                      </button>
                      {open && (
                        <div className="px-5 pb-4 text-muted text-sm leading-relaxed border-t border-slate-100 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="bg-accent-light rounded-2xl p-6 text-center">
            <p className="font-serif font-bold text-primary mb-2">Still have questions?</p>
            <p className="text-muted text-sm mb-4">Contact our team and we will be happy to help.</p>
            <a href="/contact" className="btn-secondary inline-flex">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
