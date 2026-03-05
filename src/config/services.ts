export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  highlights: string[];
  beneficiaries: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "free-cremation",
    title: "Free Cremation Seva",
    shortDescription:
      "Providing dignified final rites and cremation services completely free of cost for those in need.",
    description:
      "Our core mission is to ensure that every soul departs with dignity. We provide full cremation services, including wood, space, and rituals, at no cost to underprivileged families.",
    icon: "🔥",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&q=80",
    highlights: [
      "100% Free for marginalized families",
      "Traditional and dignified procedures",
      "Available across Varanasi & major ghats",
      "Supplies (Wood, Ghee, Samagri) included",
    ],
    beneficiaries: "Underprivileged families and unclaimed souls",
    metaTitle: "Free Cremation Seva – Moksha Seva",
    metaDescription:
      "Moksha Seva provides free cremation services to ensure that every individual receives a dignified final journey.",
  },
  {
    slug: "dead-body-ambulance",
    title: "Free Dead Body Ambulance",
    shortDescription:
      "24/7 dedicated ambulance service for the respectful transportation of the deceased.",
    description:
      "We provide specialized transport vehicles to carry the departed from homes or hospitals to the cremation grounds. Our service is quick, respectful, and completely free.",
    icon: "🚐",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&q=80",
    highlights: [
      "24/7 Availability",
      "Trained and respectful staff",
      "Distance covered up to 50km free",
      "Direct coordination with hospitals",
    ],
    beneficiaries: "Families requiring respectful transportation",
    metaTitle: "Free Dead Body Ambulance – Moksha Seva",
    metaDescription:
      "Moksha Seva offers free 24/7 ambulance services for the respectful transport of the deceased in Varanasi and surrounding areas.",
  },
  {
    slug: "funeral-materials",
    title: "Final Rites Material (Samagri)",
    shortDescription:
      "Providing all necessary traditional materials required for Vedic final rites.",
    description:
      "The cost of ritual materials can often be a burden. We provide all essential Samagri including white cloth, gangajal, incense, and herbal powders required for a traditional Vedic funeral.",
    icon: "🤲",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=80",
    highlights: [
      "High-quality ritual samagri",
      "Standard and Vedic compliant",
      "Provided instantly on request",
      "Includes wood and Ghee for pyre",
    ],
    beneficiaries: "Indigent families and unclaimed deceased",
    metaTitle: "Funeral Rites Material – Moksha Seva",
    metaDescription:
      "We provide all traditional materials and wood required for final rites at no cost to poor families.",
  },
  {
    slug: "ritual-support",
    title: "Ritual & Priest Support",
    shortDescription:
      "Assistance from traditional priests to guide families through the final Vedic rituals.",
    description:
      "Our team includes compassionate priests who guide the grieving family through the complex Vedic rituals of Antim Sanskar, ensuring every step is performed with devotion.",
    icon: "📿",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    highlights: [
      "Guided Vedic rituals",
      "Compassionate support for families",
      "Pandit Seva available at Kashi",
      "Assistance in Asthi Visarjan",
    ],
    beneficiaries: "Families seeking traditional guidance",
    metaTitle: "Ritual & Priest Support – Moksha Seva",
    metaDescription:
      "Moksha Seva provides dedicated priests to help underprivileged families perform final rites with full Vedic tradition.",
  },
];
