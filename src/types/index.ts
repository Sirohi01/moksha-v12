export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "file" | "radio";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  skills: string;
  availability: string;
  motivation: string;
}

export interface RequestHelpFormData {
  // Step 1 - Personal Info
  name: string;
  phone: string;
  email?: string;
  city: string;
  state: string;
  // Step 2 - Help Needed
  helpType: string;
  urgency: "immediate" | "within-week" | "within-month" | "flexible";
  description: string;
  // Step 3 - Additional
  familySize?: string;
  additionalInfo?: string;
  documentFile?: File | null;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
