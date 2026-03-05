"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils";
import Button from "@/components/ui/Button";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-premium">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-primary tracking-tight leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-accent mt-1.5 translate-y-0 group-hover:translate-y-[-1px] transition-transform duration-300">
                Seva Over Self
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navigationLinks.map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      className={cn(
                        "px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-widest uppercase transition-all duration-300 flex items-center gap-2",
                        dropdownOpen === item.label
                          ? "text-accent"
                          : "text-primary/70 hover:text-primary hover:bg-accent-soft/50"
                      )}
                    >
                      {item.label}
                      <ChevronDown size={14} className={cn("transition-transform duration-300", dropdownOpen === item.label && "rotate-180")} />
                    </button>
                    {dropdownOpen === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-premium border border-border/50 py-4 z-50 animate-in fade-in zoom-in-95 duration-300">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-3 text-sm font-semibold text-primary/70 hover:text-accent hover:bg-accent-soft/30 transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-widest uppercase transition-all duration-300",
                      isActive(item.href)
                        ? "text-accent bg-accent-soft"
                        : "text-primary/70 hover:text-primary hover:bg-accent-soft/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Button href="/donation" variant="primary" size="md" className="rounded-full !px-8 !py-3.5 text-xs font-semibold uppercase tracking-widest">
              Donate Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-3 rounded-2xl text-primary/70 hover:text-primary hover:bg-accent-soft transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-24 z-50 bg-background/95 backdrop-blur-xl px-6 py-10 space-y-8 animate-in slide-in-from-right duration-500 overflow-y-auto">
          {navigationLinks.map((item) => (
            <div key={item.href} className="space-y-4">
              {item.children ? (
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">
                    {item.label}
                  </p>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-3 text-xl font-serif font-semibold text-primary/80"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "block text-3xl font-serif font-semibold transition-all",
                    isActive(item.href) ? "text-accent" : "text-primary"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-10 border-t border-border/50">
            <Button
              href="/donation"
              variant="primary"
              size="lg"
              className="w-full rounded-2xl py-6 rounded-full font-semibold"
            >
              Donate Now
            </Button>
          </div>

        </div>
      )}
    </header>
  );

}
