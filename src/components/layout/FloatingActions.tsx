"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

// Custom Premium SVGs
const Icons = {
    Facebook: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    Instagram: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
    ),
    Twitter: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
        </svg>
    ),
    YouTube: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
    LinkedIn: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    WhatsApp: () => (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.002 12.048a11.823 11.823 0 001.59 5.903L0 24l6.117-1.605a11.782 11.782 0 005.925 1.585h.005c6.637 0 12.046-5.411 12.048-12.05a11.8 11.8 0 00-3.541-8.513" /></svg>
    ),
    ChevronUp: () => (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
        </svg>
    )
};

export default function FloatingActions() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const socialLinks = [
        {
            name: "Facebook",
            url: siteConfig.socialLinks.facebook,
            color: "bg-[#1877F2]",
            icon: <Icons.Facebook />
        },
        {
            name: "Twitter",
            url: siteConfig.socialLinks.twitter,
            color: "bg-[#000000]",
            icon: <Icons.Twitter />
        },
        {
            name: "Instagram",
            url: siteConfig.socialLinks.instagram,
            color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
            icon: <Icons.Instagram />
        },
        {
            name: "LinkedIn",
            url: siteConfig.socialLinks.linkedin,
            color: "bg-[#0077B5]",
            icon: <Icons.LinkedIn />
        },
        {
            name: "YouTube",
            url: siteConfig.socialLinks.youtube,
            color: "bg-[#FF0000]",
            icon: <Icons.YouTube />
        }
    ];

    return (
        <>
            {/* Left Floating Social Sidebar */}
            <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0.5 pointer-events-none">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${link.color} p-3.5 translate-x-[-75%] hover:translate-x-0 transition-all duration-300 pointer-events-auto rounded-r-xl group shadow-2xl flex items-center justify-between min-w-[170px] border-y border-r border-white/10`}
                    >
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                            {link.name}
                        </span>
                        <div className="shrink-0 flex items-center justify-center text-white drop-shadow-sm group-hover:scale-110 transition-transform">
                            {link.icon}
                        </div>
                    </a>
                ))}
            </div>

            {/* Right Floating Actions */}
            <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-5 pointer-events-none">

                {/* Scroll to Top */}
                <button
                    onClick={scrollToTop}
                    className={`p-4 bg-white text-primary rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.1)] pointer-events-auto transition-all duration-500 border border-slate-100 hover:bg-accent hover:text-white group flex items-center justify-center ${showScrollTop ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
                        }`}
                    aria-label="Scroll to top"
                >
                    <div className="group-hover:-translate-y-1 transition-transform">
                        <Icons.ChevronUp />
                    </div>
                </button>

                {/* WhatsApp Button */}
                <a
                    href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}?text=Hello Moksha Seva, I need assistance.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] p-4 rounded-full shadow-[0_15px_45px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto group relative animate-bounce-slow border-2 border-white/20 flex items-center justify-center"
                    aria-label="Contact on WhatsApp"
                >
                    <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping pointer-events-none"></span>

                    <span className="absolute right-full mr-5 top-1/2 -translate-y-1/2 bg-white text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100 translate-x-4 group-hover:translate-x-0">
                        Chat on WhatsApp
                    </span>
                    <div className="text-white drop-shadow-md relative z-10">
                        <Icons.WhatsApp />
                    </div>
                </a>
            </div>

            <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
        </>
    );
}
