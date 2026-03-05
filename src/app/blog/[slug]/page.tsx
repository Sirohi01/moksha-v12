import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/config/blogs";
import { formatDate } from "@/utils";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.image }],
    },
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-3xl lg:text-4xl font-serif font-semibold text-primary mt-12 mb-6">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={i} className="text-xl font-serif font-bold text-primary mb-4">{line.replace(/\*\*/g, "")}</p>;
      }
      if (line.startsWith("- ")) {
        return <li key={i} className="text-muted text-lg ml-6 mb-2 list-disc">{line.replace("- ", "")}</li>;
      }
      if (line.trim() === "") return <div key={i} className="h-4" />;

      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="text-muted text-lg lg:text-xl leading-relaxed mb-6 font-medium">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-primary font-bold">{part.replace(/\*\*/g, "")}</strong>
            ) : part
          )}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Blog Detail Hero */}
      <section className="relative h-[70vh] flex items-end pb-24 overflow-hidden">
        <Image
          src="/images/impact.png"
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 space-y-8 animate-fade-up">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 bg-accent rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
              {post.category}
            </div>
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{post.readTime}</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-semibold text-white leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-xs font-bold text-accent uppercase">
                {post.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold uppercase tracking-widest">{post.author}</span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{post.authorRole}</span>
              </div>
            </div>
            <span className="text-white/20 text-xl font-serif italic">in</span>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 relative">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags & Support */}
          <div className="mt-20 pt-16 border-t border-border/40 space-y-16">
            <div className="flex flex-wrap gap-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-bg-alt rounded-full text-[10px] font-bold text-primary/40 uppercase tracking-widest border border-border/40">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="bg-accent-soft rounded-[40px] p-12 lg:p-16 border border-accent/10 text-center space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-primary">Support this Journal</h3>
                <p className="text-muted text-lg leading-relaxed font-medium max-w-lg mx-auto">
                  Your donation ensures that we can continue documenting these journeys
                  and providing the essential services mentioned in this story.
                </p>
                <div className="pt-6">
                  <Button href="/donation" variant="primary" size="lg" className="rounded-full !px-16 py-6 uppercase tracking-widest text-xs font-bold shadow-premium">
                    Sponsor This Seva
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-16">
              <Link href="/blog" className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 hover:text-accent transition-colors flex items-center gap-3">
                ← Back to Journals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
