"use client";

import { useState } from "react";
import { galleryItems, galleryCategories } from "@/config/gallery";
import { cn } from "@/utils";
import Image from "next/image";

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "photo" | "video">("all");
  const [category, setCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = galleryItems.filter((item) => {
    const typeMatch = filter === "all" || item.type === filter;
    const catMatch = category === "All" || item.category === category;
    return typeMatch && catMatch;
  });

  const lightboxItem = galleryItems.find((i) => i.id === lightbox);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero */}
      <section className="py-24 bg-accent-soft border-b border-accent/10">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-md rounded-full text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6 border border-accent/20">
            Visual Registry
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-semibold text-primary mb-6">
            Moments of Seva
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Capturing the spirit of compassion across the ghats of Kashi
            and beyond. Every image tells a story of dignity.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">

          {/* Advanced Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 px-4">
            <div className="flex items-center gap-2 p-1.5 bg-bg-alt rounded-2xl border border-border/40">
              {(["all", "photo", "video"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500",
                    filter === t
                      ? "bg-white text-primary shadow-premium"
                      : "text-primary/40 hover:text-primary"
                  )}
                >
                  {t === "all" ? "All" : t === "photo" ? "Photos" : "Videos"}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border",
                    category === cat
                      ? "bg-accent border-accent text-primary shadow-sm"
                      : "bg-transparent border-border/60 text-primary/40 hover:border-accent/40"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid - Masonry-ish via CSS Columns or just clean grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 px-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative mb-8 rounded-[40px] overflow-hidden cursor-pointer shadow-card hover:shadow-premium transition-all duration-700 break-inside-avoid"
                onClick={() => setLightbox(item.id)}
              >
                <div className="relative overflow-hidden bg-bg-alt">
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-white line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  {item.type === "video" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-40 animate-fade-in">
              <div className="text-4xl mb-6">🏜️</div>
              <p className="text-primary/40 font-bold uppercase tracking-widest text-xs">
                No captures match your current filtering.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Section */}
      {lightbox && lightboxItem && (
        <div
          className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 lg:p-12 transition-all duration-500"
          onClick={() => setLightbox(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center border border-white/20 z-[110]"
            onClick={() => setLightbox(null)}
          >
            <span className="text-white text-xl">✕</span>
          </button>

          <div
            className="w-full max-w-6xl max-h-full overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full lg:flex-1 aspect-video lg:aspect-auto h-full rounded-[40px] overflow-hidden shadow-2xl bg-black animate-fade-up">
              {lightboxItem.type === "photo" ? (
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={lightboxItem.src}
                  className="w-full h-full"
                  allowFullScreen
                  title={lightboxItem.title}
                />
              )}
            </div>

            <div className="w-full lg:w-96 text-center lg:text-left space-y-6 animate-fade-in">
              <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-[9px] font-bold text-accent uppercase tracking-[0.2em]">
                {lightboxItem.category}
              </div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                {lightboxItem.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
                {lightboxItem.description}
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                  Archived: {lightboxItem.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
