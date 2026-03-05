import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/sections/HeroSection";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesPreviewSection from "@/components/sections/ServicesPreviewSection";
import ImpactStatsSection from "@/components/sections/ImpactStatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LatestBlogsSection from "@/components/sections/LatestBlogsSection";
import DonationCTASection from "@/components/sections/DonationCTASection";
import VolunteerCTASection from "@/components/sections/VolunteerCTASection";

export const metadata: Metadata = {
  title: `${siteConfig.name} – ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EmergencyBanner />
      <HowItWorksSection />
      <ServicesPreviewSection />
      <ImpactStatsSection />
      <TestimonialsSection />
      <LatestBlogsSection />
      <DonationCTASection />
    </>

  );
}
