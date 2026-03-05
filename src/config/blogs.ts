export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "dignity-for-unclaimed-souls",
    title: "Dignity for the Departed: The Story of Unclaimed Souls",
    excerpt:
      "Every soul deserves a respectful farewell. Our team ensures that those with no one to call their own are cremated with full Vedic rituals.",
    content: `
## A Final Act of Kindness

In the bustling city of Varanasi, hundreds of individuals pass away every year with no family to claim them. These are the forgotten souls — the holy men, the wanderers, and those who outlived their kin.

Moksha Seva believes that the end of life should be as dignified as its beginning.

## Our Mission

Our 'Unclaimed Souls' program works closely with the local administration and hospitals. When a body goes unclaimed for 72 hours, our volunteers step in. We don't just 'dispose' of the remains; we perform a full Vedic 'Antim Sanskar'.

## The Rituals

From the fresh white cloth to the gangajal and the chanting of mantras, every step is performed by our dedicated priests. We believe this is the highest form of Seva — serving someone who can never thank you back.

## A Moment of Peace

Last month, we performed the final rites for 'Baba', a man who had lived on the steps of the ghats for 30 years. Local shopkeepers joined our volunteers, offering flowers. It was a beautiful, somber reminder that in death, we are all one community.

## Your Contribution

Providing wood, materials, and space for a single cremation costs approximately ₹3,500. Your donations ensure that no soul is left abandoned in their final journey.
    `,
    author: "Pandit Ram Naresh",
    authorRole: "Head Priest",
    publishedAt: "2024-08-20",
    readTime: "5 min read",
    category: "Final Rites",
    image:
      "https://images.unsplash.com/photo-1596752000570-5b56598c946f?w=800&q=80",
    tags: ["unclaimed", "dignity", "cremation", "rituals"],
    metaTitle: "Dignity for Unclaimed Souls – Moksha Seva",
    metaDescription:
      "Read how Moksha Seva provides respectful final rites and Vedic cremations for unclaimed individuals in Varanasi.",
  },
  {
    slug: "ambulance-service-at-3am",
    title: "The 3 AM Call: A Journey of Silence and Service",
    excerpt:
      "Our ambulance drivers are the silent heroes who traverse the city at all hours to ensure the deceased are transported with utmost respect.",
    content: `
## When the World Sleeps

At 3:15 AM, the Moksha Seva helpline buzzed. A family in a remote village near Varanasi had lost their patriarch. They were grieving, overwhelmed, and had no means to bring him to the Manikarnika Ghat.

## Rapid Response

Within 20 minutes, Ramesh, one of our most experienced drivers, was on the road. For him, this isn't just a job; it's a spiritual calling. "Each passenger I carry is someone's father, mother, or child. They deserve silence and speed," he says.

## The Journey

The journey back was quiet. Behind the partition, the family sat in somber reflection. Ramesh navigated the narrow lanes with practiced ease. By sunrise, they were at the banks of the Ganges, ready for the final rites.

## More Than Just Transport

Our ambulances are equipped specifically for this purpose. They are kept impeccably clean and are offered to any family in need, completely free of charge.

## How You Can Help

Maintaining a fleet of three dedicated ambulances involves fuel, maintenance, and staff costs. Your support keeps these vehicles running 24/7.
    `,
    author: "Deepak Yadav",
    authorRole: "Logistics Coordinator",
    publishedAt: "2024-07-15",
    readTime: "4 min read",
    category: "Ambulance Seva",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&q=80",
    tags: ["ambulance", "24/7", "service", "Varanasi"],
    metaTitle: "Free Ambulance Service Case Study – Moksha Seva",
    metaDescription:
      "A story of our 24/7 free dead body ambulance service providing relief to families in their most difficult times.",
  },
  {
    slug: "the-meaning-of-moksha",
    title: "The Meaning of Moksha: Why Final Rites Matter",
    excerpt:
      "Understanding the spiritual significance of the 'Antim Sanskar' and why we are dedicated to helping every soul find peace.",
    content: `
## The Gateway to Liberation

In Vedic tradition, life doesn't end; it transforms. The 'Antim Sanskar' or the last sacrifice is the final ritual that prepares the soul for its next journey. 

## The Five Elements

The cremation process is a symbolic return to the five elements: Earth, Water, Fire, Air, and Ether. Performing this correctly is believed to help the soul find 'Moksha' — liberation from the cycle of rebirth.

## Why We Intervene

Many families today find the traditional ceremonies financially out of reach. The cost of sacred wood, the priest's Dakshina, and the materials can run into thousands. This financial stress should never interfere with a family's grief or a soul's ritual.

## Our Role

Moksha Seva acts as a bridge. We provide the resources so that the focus can remain on prayer and remembrance. By ensuring these traditions continue, we preserve the spiritual heritage of our community.

## Join Our Cause

By sponsoring a cremation or donating ritual samagri, you are performing a 'Maha-Daan'. Help us keep the eternal flame of service alive.
    `,
    author: "Swami Shivanand",
    authorRole: "Spiritual Advisor",
    publishedAt: "2024-06-05",
    readTime: "6 min read",
    category: "Spiritual",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=80",
    tags: ["moksha", "vedic", "spirituality", "tradition"],
    metaTitle: "The Spiritual Significance of Cremation – Moksha Seva",
    metaDescription:
      "Explore the Vedic meaning of Moksha and why providing dignified final rites is a sacred duty.",
  },
];
