export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Seva", href: "/seva" },
  { label: "Request Help", href: "/request-help" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Seva", href: "/seva" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Transparency", href: "/transparency" },
  ],
  getInvolved: [
    { label: "Volunteer", href: "/volunteer" },
    { label: "Donate", href: "/donation" },
    { label: "Request Help", href: "/request-help" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/privacy-policy#terms" },
  ],
};
