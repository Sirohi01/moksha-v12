export interface Stat {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  service: string;
  avatar: string;
}

export interface HowItWorks {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const impactStats: Stat[] = [
  {
    value: "15K+",
    label: "Cremations Performed",
    description: "Dignified final rites provided to souls in need",
    icon: "🔥",
  },
  {
    value: "25K+",
    label: "Ambulance Trips",
    description: "Respectful transportation provided 24/7",
    icon: "🚐",
  },
  {
    value: "100%",
    label: "Free of Cost",
    description: "No charges ever taken from the needy",
    icon: "💎",
  },
  {
    value: "50+",
    label: "Ghats Covered",
    description: "Operating across Varanasi and beyond",
    icon: "🌊",
  },
  {
    value: "24/7",
    label: "Helpline",
    description: "Immediate support in hours of grief",
    icon: "📞",
  },
  {
    value: "200+",
    label: "Dedicated Volunteers",
    description: "Serving with compassion and empathy",
    icon: "💛",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Shrivastava",
    location: "Varanasi, UP",
    quote:
      "When my brother passed away and we had no money for the funeral, Moksha Seva came like an angel. They handled everything with such dignity and respect that I will never forget.",
    service: "Free Cremation Seva",
    avatar: "R",
  },
  {
    name: "Sunil Pandey",
    location: "Mirzapur, UP",
    quote:
      "The ambulance arrived within 20 minutes of my call. In a city like Varanasi, getting such timely and free support for a deceased family member is truly a blessing.",
    service: "Dead Body Ambulance",
    avatar: "S",
  },
  {
    name: "Meera Devi",
    location: "Ghazipur, UP",
    quote:
      "Performing the last rites according to Vedic traditions was my father's last wish. Moksha Seva's priests guided us through every step and even provided the samagri for free.",
    service: "Ritual Support",
    avatar: "M",
  },
  {
    name: "Prakash Gupta",
    location: "Varanasi, UP",
    quote:
      "Losing a loved one is hard, but the financial burden of cremation makes it harder. I am grateful to this organization for ensuring my mother's final journey was honorable.",
    service: "Final Rites Material",
    avatar: "P",
  },
];

export const howItWorks: HowItWorks[] = [
  {
    step: 1,
    title: "Call Our Helpline",
    description:
      "Reach out to our 24/7 emergency cremation helpline. Our team will guide you through the initial steps and dispatch an ambulance.",
    icon: "📞",
  },
  {
    step: 2,
    title: "Dignified Transport",
    description:
      "Our specialized ambulance will arrive to respectfully transport the deceased to the cremation grounds or your desired location.",
    icon: "🚐",
  },
  {
    step: 3,
    title: "Final Rites",
    description:
      "We provide the wood, ritual materials, and a priest to ensure the final rites are performed with full dignity and Vedic traditions.",
    icon: "🔥",
  },
];
