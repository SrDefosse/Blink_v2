 // Navbar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

/** ====== Subcomponentes internos ====== */
interface HoveredLinkProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  [key: string]: any;
}

const HoveredLink = ({ children, to, href, ...rest }: HoveredLinkProps) => {
  // Si pasas "to", usa <Link/> de react-router; si no, cae a <a>
  if (to) {
    return (
      <Link
        to={to}
        {...rest}
        className="text-neutral-700 hover:text-black"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      {...rest}
      className="text-neutral-700 hover:text-black"
    >
      {children}
    </a>
  );
};

interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

const ProductItem = ({ title, description, href, src }: ProductItemProps) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl object-cover"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

const Menu = ({ setActive, children }: MenuProps) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/20 bg-[#FFF8F0]/70 backdrop-blur-md shadow-lg flex justify-center space-x-6 px-8 py-6"
    >
      {children}
    </nav>
  );
};

interface MenuItemProps {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children: React.ReactNode;
}

const MenuItem = ({ setActive, active, item, children }: MenuItemProps) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] select-none"
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-[#FFF8F0] rounded-2xl overflow-hidden border border-white/30 shadow-2xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

/** ====== Componente principal exportado ====== */
interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Todo el contenido/"parámetros" se define aquí mismo:
  const services = [
    { label: "Web Development", to: "/web-dev" },
    { label: "Branding & Identity", to: "/branding" },
    { label: "AI Driven Content Creation", to: "/ai-content-creation" },
    { label: "Chatbots", to: "/chatbots" },
    { label: "Automation Systems", to: "/automation-systems" },
  ];

  const products = [
    {
      title: "MT3 Arquitectos",
      href: "https://mt3arquitectos.com.mx",
      src: "/showcase/gallery_imgs/gallery1.png",
      description: "Architecture and interior design",
    },
    {
      title: "Sinergia Telecomunicaciones",
      href: "https://sinergia-telecomunicaciones.com.mx",
      src: "/showcase/gallery_imgs/gallery2.png",
      description: "Telecommunications solutions",
    },
    {
      title: "Stellaris Education",
      href: "https://stellarisnashville.com",
      src: "/showcase/gallery_imgs/gallery3.png",
      description: "Pre-K education school in Nashville, TN",
    },
    {
      title: "Stoever",
      href: "https://stoever.com.mx",
      src: "/showcase/gallery_imgs/gallery4.png",
      description: "Construction and leather tanning chemicals company",
    },
  ];

  const pricing = [
    { label: "Hobby", to: "/hobby" },
    { label: "Individual", to: "/individual" },
    { label: "Team", to: "/team" },
    { label: "Enterprise", to: "/enterprise" },
  ];

  const toggleMobileAccordion = (section: string) => {
    setMobileAccordion(mobileAccordion === section ? null : section);
  };

  return (
    <>
      {/* Desktop Menu - Hidden on mobile */}
      <div
        className={cn(
          "fixed top-4 inset-x-0 max-w-xl mx-auto z-50 hidden md:block",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              {services.map((s) => (
                <HoveredLink key={s.label} to={s.to}>
                  {s.label}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              {products.map((p) => (
                <ProductItem key={p.title} {...p} />
              ))}
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              {pricing.map((p) => (
                <HoveredLink key={p.label} to={p.to}>
                  {p.label}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* Mobile Menu - Visible only on mobile */}
      <div className={cn("fixed top-4 inset-x-0 z-50 px-4 md:hidden", className)}>
        {/* Mobile Menu Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FFF8F0]/70 backdrop-blur-md border border-white/20 shadow-2xl"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mt-2 bg-[#FFF8F0]/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-4">
                {/* Services Section */}
                <div className="border-b border-neutral-200 pb-3">
                  <button
                    onClick={() => toggleMobileAccordion("services")}
                    className="w-full flex justify-between items-center text-left font-medium text-black"
                  >
                    <span>Services</span>
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform",
                        mobileAccordion === "services" ? "rotate-180" : ""
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-2 pl-2">
                          {services.map((s) => (
                            <Link
                              key={s.label}
                              to={s.to}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-neutral-700 hover:text-black"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Products Section */}
                <div className="border-b border-neutral-200 py-3">
                  <button
                    onClick={() => toggleMobileAccordion("products")}
                    className="w-full flex justify-between items-center text-left font-medium text-black"
                  >
                    <span>Products</span>
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform",
                        mobileAccordion === "products" ? "rotate-180" : ""
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === "products" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-2 pl-2">
                          {products.map((p) => (
                            <a
                              key={p.title}
                              href={p.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-neutral-700 hover:text-black"
                            >
                              {p.title}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Pricing Section */}
                <div className="pt-3">
                  <button
                    onClick={() => toggleMobileAccordion("pricing")}
                    className="w-full flex justify-between items-center text-left font-medium text-black"
                  >
                    <span>Pricing</span>
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform",
                        mobileAccordion === "pricing" ? "rotate-180" : ""
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === "pricing" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-2 pl-2">
                          {pricing.map((p) => (
                            <Link
                              key={p.label}
                              to={p.to}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-neutral-700 hover:text-black"
                            >
                              {p.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
