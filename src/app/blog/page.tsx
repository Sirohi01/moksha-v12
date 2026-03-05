import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/config/blogs";
import { formatDate } from "@/utils";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vedic Journals – Stories & Updates",
  description:
    "Field stories, impact updates, and spiritual insights from the communities Moksha Seva serves across India.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero */}
      <section className="py-24 bg-accent-soft border-b border-accent/10">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-md rounded-full text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6 border border-accent/20">
            Field Journals
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-semibold text-primary mb-6">
            Voices of Moksha
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Documenting the sacred journeys and the tireless efforts of our
            volunteers in bringing dignity to those in need.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-[40px] overflow-hidden shadow-card group-hover:shadow-premium transition-all duration-700 border border-border/40 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="/images/impact.png"
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-bold text-primary uppercase tracking-widest shadow-sm">
                        {post.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[9px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-muted text-base leading-relaxed mb-10 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="pt-8 border-t border-border/40 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center text-[10px] font-bold text-accent uppercase">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{post.author}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                        <span className="text-primary text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
