import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

// ==== Single-file demo adapted for React + Vite (no Lenis, no Button import, using react-icons) ====
export default function Footer() {
  return (
    <div className="bg-[#FAF8F3] relative w-full">
      <div className="flex h-screen flex-col items-center justify-center gap-10">
        <h1 className="max-w-xl text-center">
          <span className="text-foreground/80 text-4xl font-semibold">Thank you</span>
          <br />
          <span className="text-5xl font-bold">for scrolling</span>
        </h1>
      </div>
      <StickyFooter />
    </div>
  );
}

// ===== StickyFooter (in-file) =====
function StickyFooter({ className = "" }) {
  return (
    <footer
      className={`bg-[#FAF8F3] relative h-[720px] w-full ${className}`}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[720px] w-full">
        <div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
          <div className="relative flex size-full flex-col justify-between gap-5 border-t px-4 py-8 md:px-12">
            {/* Decorative background (neutralized to work without custom CSS tokens) */}
            <div aria-hidden className="absolute inset-0 isolate z-0">
              <div
                className="absolute top-0 left-0 rounded-full"
                style={{
                  height: 320,
                  width: 140,
                  transform: "translateY(-87.5px) rotate(-45deg)",
                  background:
                    "radial-gradient(68% 69% at 55% 31%, rgba(0,0,0,.06) 0%, rgba(140,140,140,.02) 50%, rgba(0,0,0,.01) 80%)",
                }}
              />
              <div
                className="absolute top-0 left-0 rounded-full"
                style={{
                  height: 320,
                  width: 240,
                  transform: "translate(5%,-50%) rotate(-45deg)",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,.04) 0%, rgba(0,0,0,.01) 80%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 rounded-full"
                style={{
                  height: 320,
                  width: 240,
                  transform: "translateY(-87.5px) rotate(-45deg)",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,.04) 0%, rgba(0,0,0,.01) 80%, transparent 100%)",
                }}
              />
            </div>

            <div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0">
              <AnimatedContainer className="w-full max-w-sm min-w-64 space-y-4 relative z-[1]">
                <img src="/logos/blink_logo.webp" alt="Logo" className="size-24" />
                <p className="text-muted-foreground mt-8 text-sm md:mt-0">
                  We create stunning websites, apps, branding, and digital experiences that make your business stand out online.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return Icon ? (
                      <a
                        key={link.title}
                        href={link.href}
                        aria-label={link.title}
                        className="inline-flex size-8 items-center justify-center rounded-md border hover:bg-black/5 transition"
                      >
                        <Icon className="size-4" />
                      </a>
                    ) : null;
                  })}
                </div>
              </AnimatedContainer>

              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer key={group.label} delay={0.1 + index * 0.1} className="w-full relative z-[1]">
                  <div className="mb-10 md:mb-0">
                    <h3 className="text-sm uppercase tracking-wide">{group.label}</h3>
                    <ul className="text-muted-foreground mt-4 space-y-2 text-sm md:text-xs lg:text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="hover:text-foreground inline-flex items-center transition-all duration-300"
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>

            <div className="text-muted-foreground flex flex-col items-center justify-between gap-2 border-t pt-2 text-sm md:flex-row">
              <p>© 2025 Blink Sites. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===== Types =====
type FooterLink = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type FooterLinkGroup = {
  label: string;
  links: FooterLink[];
};

// ===== Data =====
const socialLinks: FooterLink[] = [
  { title: "Facebook", href: "#", icon: FaFacebook },
  { title: "Instagram", href: "#", icon: FaInstagram },
  { title: "Youtube", href: "#", icon: FaYoutube },
  { title: "LinkedIn", href: "#", icon: FaLinkedin },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Services",
    links: [
      { title: "Web Development", href: "/web-dev" },
      { title: "Branding & Identity", href: "/branding" },
      { title: "AI Driven Content Creation", href: "/ai-content-creation" },
      { title: "Chatbots", href: "/chatbots" },
      { title: "Automation Systems", href: "/automation-systems" },
    ],
  },
  {
    label: "Portfolio",
    links: [
      { title: "MT3 Arquitectos", href: "https://mt3arquitectos.com.mx" },
      { title: "Sinergia Telecomunicaciones", href: "https://sinergia-telecomunicaciones.com.mx" },
      { title: "Stellaris Education", href: "https://stellarisnashville.com" },
      { title: "Stoever", href: "https://stoever.com.mx" },
    ],
  },
  {
    label: "Pricing",
    links: [
      { title: "Hobby", href: "/hobby" },
      { title: "Individual", href: "/individual" },
      { title: "Team", href: "/team" },
      { title: "Enterprise", href: "/enterprise" },
    ],
  },
];

// ===== Animated container =====
function AnimatedContainer({ delay = 0.1, children, className = "", ...props }: { delay?: number; children: React.ReactNode; className?: string; [key: string]: any }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
