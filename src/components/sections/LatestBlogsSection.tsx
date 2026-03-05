import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/config/blogs";
import { formatDate } from "@/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function LatestBlogsSection() {
  const latestBlogs = blogPosts.slice(0, 3);

  return (
    <section className="py-section bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <SectionHeader
            eyebrow="Sanctified Stories"
            title="Voices of Impact"
            subtitle="Explore stories of hope, dignity, and tireless service directly from the field."
          />
          <Button href="/blog" variant="outline" className="rounded-full border-accent/20 px-10">
            View All Journals
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {latestBlogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-card hover:shadow-premium transition-all duration-700">
                <Image
                  src="/images/impact.png"
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10 space-y-4">
                  <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-semibold text-white uppercase tracking-[0.2em] border border-white/20">
                    {post.category}
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-white leading-tight">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between text-[10px] font-semibold text-white/60 tracking-widest uppercase pt-4 border-t border-white/10">
                    <span>{post.author}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

