# Moksha Seva – NGO Website

A production-ready Next.js 14+ website for Moksha Seva, a humanitarian NGO.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Fonts**: Inter + Playfair Display (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── seva/               # Services (index + [slug])
│   ├── blog/               # Blog (index + [slug])
│   ├── gallery/            # Gallery with filtering
│   ├── request-help/       # Multi-step help request form
│   ├── donation/           # Donation page (Razorpay-ready)
│   ├── volunteer/          # Volunteer application form
│   ├── contact/            # Contact form
│   ├── faq/                # FAQ accordion
│   ├── transparency/       # Impact & financial dashboard
│   ├── privacy-policy/     # Privacy policy & terms
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # robots.txt
│
├── components/
│   ├── ui/                 # Button, Card, SectionHeader, Badge
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # All home page sections
│   └── forms/              # (ready for extracted form components)
│
├── config/                 # All static content (config-driven)
│   ├── site.ts             # Site metadata
│   ├── services.ts         # Seva programs
│   ├── blogs.ts            # Blog posts
│   ├── gallery.ts          # Gallery items
│   ├── stats.ts            # Stats, testimonials, how-it-works
│   ├── donation.ts         # Donation tiers & FAQs
│   └── navigation.ts       # Nav & footer links
│
├── lib/                    # Future: API clients, helpers
├── types/                  # TypeScript interfaces
├── styles/                 # globals.css
└── utils/                  # cn(), formatDate(), etc.
```

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Seva (Services) | `/seva` |
| Seva Detail | `/seva/[slug]` |
| Blog | `/blog` |
| Blog Post | `/blog/[slug]` |
| Gallery | `/gallery` |
| Request Help | `/request-help` |
| Donation | `/donation` |
| Volunteer | `/volunteer` |
| Contact | `/contact` |
| FAQ | `/faq` |
| Transparency | `/transparency` |
| Privacy Policy | `/privacy-policy` |

## Features

- ✅ Config-driven content (no hardcoding in components)
- ✅ SEO: generateMetadata(), OpenGraph, JSON-LD, sitemap, robots.txt
- ✅ Static generation for all static/dynamic routes
- ✅ Multi-step request help form with validation
- ✅ Gallery with photo/video filtering + lightbox
- ✅ Donation page ready for Razorpay integration
- ✅ Responsive design (mobile-first)
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ Peaceful, trustworthy design theme

## Backend Integration

The project is structured for easy Node.js + Express + MongoDB integration:

- Forms are ready for `fetch()` POST calls to `/api/*` routes
- Add `src/app/api/` folder for Next.js API routes
- Use environment variables for secrets (`.env.local`)
- Razorpay: add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to env
- Cloudinary: add `CLOUDINARY_CLOUD_NAME` etc. for file uploads

## Design System

| Token | Value |
|-------|-------|
| Background | `#F8FAFC` |
| Primary | `#1E293B` |
| Accent (Gold) | `#D4AF37` |
| Muted | `#64748B` |
| Card | `#FFFFFF` |

## Deployment

Deploy to Vercel with zero configuration:

```bash
npm install -g vercel
vercel
```

Or build and deploy to any Node.js host:

```bash
npm run build
npm start
```
# moksha-v12
