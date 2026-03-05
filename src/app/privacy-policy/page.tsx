import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description: "Moksha Seva's privacy policy and terms of service.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section-padding bg-background border-b border-slate-100">
        <div className="container-max max-w-2xl">
          <h1 className="text-4xl font-serif font-bold text-primary mb-3">
            Privacy Policy & Terms
          </h1>
          <p className="text-muted">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl prose prose-slate">
          <div className="space-y-10 text-muted text-base leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">Privacy Policy</h2>
              <h3 className="text-lg font-semibold text-primary mb-2">1. Information We Collect</h3>
              <p>We collect personal information that you voluntarily provide when you donate, volunteer, request help, or contact us. This includes name, email, phone number, and address.</p>

              <h3 className="text-lg font-semibold text-primary mt-5 mb-2">2. How We Use Your Information</h3>
              <p>Your information is used solely to:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Process donations and issue tax certificates</li>
                <li>Contact you regarding your volunteer application or help request</li>
                <li>Send program updates and newsletters (only if opted in)</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mt-5 mb-2">3. Data Sharing</h3>
              <p>We do not sell, rent, or share your personal information with third parties, except as required by law or for payment processing (via Razorpay).</p>

              <h3 className="text-lg font-semibold text-primary mt-5 mb-2">4. Data Security</h3>
              <p>We implement industry-standard security measures to protect your data. All payment transactions are encrypted via SSL.</p>

              <h3 className="text-lg font-semibold text-primary mt-5 mb-2">5. Your Rights</h3>
              <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at {siteConfig.email}.</p>
            </div>

            <div id="terms">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">Terms of Service</h2>
              <h3 className="text-lg font-semibold text-primary mb-2">1. Acceptance</h3>
              <p>By using this website, you agree to these Terms of Service. If you do not agree, please do not use our website.</p>

              <h3 className="text-lg font-semibold text-primary mt-5 mb-2">2. Donations</h3>
              <p>All donations are voluntary. Moksha Seva does not guarantee specific outcomes from donations. Refunds are considered on a case-by-case basis.</p>

              <h3 className="text-lg font-semibold text-primary mt-5 mb-2">3. Intellectual Property</h3>
              <p>All content on this website, including text, images, and logos, is the intellectual property of Moksha Seva and may not be reproduced without permission.</p>

              <h3 className="text-lg font-semibold text-primary mt-5 mb-2">4. Limitation of Liability</h3>
              <p>Moksha Seva is not liable for any indirect, incidental, or consequential damages arising from use of this website.</p>

              <h3 className="text-lg font-semibold text-primary mt-5 mb-2">5. Contact</h3>
              <p>For questions about these terms, contact us at <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">{siteConfig.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
