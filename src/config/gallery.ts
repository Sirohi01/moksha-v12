export type MediaType = "photo" | "video";

export interface GalleryItem {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  src: string;
  thumbnail: string;
  category: string;
  date: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    type: "photo",
    title: "Dignified Final Rites at Manikarnika Ghat",
    description: "Ensuring every soul receives a respectful farewell with full Vedic traditions.",
    src: "/service1.png",
    thumbnail: "/service1.png",
    category: "Cremation Seva",
    date: "2024-11-15",
    alt: "Cremation services in Varanasi",
  },
  {
    id: "g2",
    type: "photo",
    title: "24/7 Ambulance Service in Action",
    description: "Our dedicated ambulance team responding to an emergency call at midnight.",
    src: "/service2.png",
    thumbnail: "/service2.png",
    category: "Ambulance Seva",
    date: "2024-11-10",
    alt: "Moksha Seva free ambulance service",
  },
  {
    id: "g3",
    type: "photo",
    title: "Vedic Samagri Preparation",
    description: "Preparing sacred materials required for traditional Antim Sanskar.",
    src: "/service3.png",
    thumbnail: "/service3.png",
    category: "Rituals (Samagri)",
    date: "2024-11-05",
    alt: "Vedic ritual materials preparation",
  },
  {
    id: "g4",
    type: "photo",
    title: "Spiritual Guidance for Grieving Families",
    description: "Our priests providing solace and guidance during the final ceremonies.",
    src: "/service4.png",
    thumbnail: "/service4.png",
    category: "Spiritual Support",
    date: "2024-10-28",
    alt: "Priest providing spiritual support",
  },
  {
    id: "g5",
    type: "photo",
    title: "Essential Support for Underprivileged Families",
    description: "Providing free wood and cremation materials to those in financial distress.",
    src: "/step1.png",
    thumbnail: "/step1.png",
    category: "Cremation Seva",
    date: "2024-10-20",
    alt: "Support for marginalized families",
  },
  {
    id: "g7",
    type: "video",
    title: "Moksha Seva: A Decade of Service",
    description: "A documentary exploring our journey of providing free cremation services in Varanasi.",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/image3.png",
    category: "About Us",
    date: "2024-09-01",
    alt: "Documentary thumbnail",
  },
];

export const galleryCategories = [
  "All",
  "Cremation Seva",
  "Ambulance Seva",
  "Rituals (Samagri)",
  "Spiritual Support",
  "About Us",
];
