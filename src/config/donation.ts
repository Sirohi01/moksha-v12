export interface DonationTier {
  amount: number;
  label: string;
  description: string;
  impact: string;
  icon: string;
  popular?: boolean;
}

export const donationTiers: DonationTier[] = [
  {
    amount: 500,
    label: "Sustainer",
    description: "A small but meaningful contribution",
    impact: "Feeds a family of 4 for one day",
    icon: "🌱",
  },
  {
    amount: 1500,
    label: "Supporter",
    description: "Makes a real difference every month",
    impact: "Provides medicines for 5 patients",
    icon: "💛",
    popular: true,
  },
  {
    amount: 5000,
    label: "Champion",
    description: "A generous act of compassion",
    impact: "Sponsors a child's education for one month",
    icon: "🏆",
  },
  {
    amount: 10000,
    label: "Guardian",
    description: "Transformative impact on many lives",
    impact: "Runs a free medical camp for a village",
    icon: "🛡️",
  },
];

export const donationFaqs = [
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes. Moksha Seva is registered under Section 80G of the Income Tax Act. You will receive a certificate for tax exemption.",
  },
  {
    question: "How is my donation used?",
    answer:
      "90% of all donations go directly to program expenses. Administrative costs are kept below 10%. Full transparency reports are available.",
  },
  {
    question: "Can I donate in memory of someone?",
    answer:
      "Yes. We accept tribute donations. Please mention the name in the transaction note or contact us.",
  },
  {
    question: "Is online donation secure?",
    answer:
      "All transactions are processed through Razorpay with bank-grade encryption. We never store your card information.",
  },
];
