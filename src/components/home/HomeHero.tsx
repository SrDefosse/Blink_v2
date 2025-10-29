import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/** Botón simple interno al componente (sin dependencias externas) */
function Button({ children, size = "md", className = "", onClick, type = "button" }: ButtonProps) {
  const sizes: Record<"sm" | "md" | "lg", string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-xl border border-black/10 bg-black text-white transition-colors hover:opacity-90 active:opacity-80 ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default function HomeHero() {
  return (
    <section className="min-h-screen overflow-hidden relative py-20 bg-[#FAF8F3]">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative ">
          <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider">
            1,996
          </p>
          <h1
            className={`z-20 text-primary relative font-bold text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]`}
          >
            BLINK
          </h1>
          <p className="text-4xl hidden xl:block absolute -bottom-12 right-24 font-thin tracking-[6px]">
            ALI IMAM
          </p>
          <p className="text-4xl absolute xl:hidden -bottom-12 left-24 font-thin tracking-[6px]">
            ALI IMAM
          </p>
        </div>

        <div className="grid relative">
          <div className="space-y-8 pt-20 flex gap-6 justify-center">
            <div className="flex gap-6 w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
              <div className="font-semibold text-xl">
                <div>/ ART DIRECTION</div>
                <div>/ WEB DESIGN (UX/UI)</div>
                <div>/ WEB DEVELOPMENT</div>
              </div>
              <div className="absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden">
                <img
                  src="/logos/blink_logo.webp"
                  alt="Designer portrait"
                  className="h-100 w-full object-contain grayscale"
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                  BASED IN MEXICO CITY
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/ai.jpg"
              alt="Designer portrait"
              className="h-100 w-full object-contain grayscale"
            />
            <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
              BASED IN BOKARO STEEL CITY
            </div>
          </div>
        </div>

        <div className="md:mt-40 mt-10">
          <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
            I'M EXPERIENCED WEB AND UX/UI DESIGNER,
            <br />
            WHO DESIGN MEMORABLE WEB EXPERIENCES FOR
            <br />
            BRANDS OF ALL SIZES
          </p>
        </div>

        <div className="flex justify-center pt-6">
          <Button size="lg">Book a call</Button>
        </div>

        <div className="md:flex mt-20 items-end justify-between">
          <div className="relative">
            <div className="w-60 h-36 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-60 h-36 absolute left-6 -top-6 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-60 h-36 absolute left-12 -top-12 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center md:justify-end gap-2">
              <span className="text-lg font-medium tracking-wider">
                RECENT WORK
              </span>
              <FiArrowDownRight className="size-6" />
            </div>

            <div className="mt-3 md:text-right">
              <h2 className="text-5xl uppercase tracking-[-4px]">
                Design without Limits
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Fondo grid claro */}
      <div
        className="absolute block inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d4d4d4 1px, transparent 1px),
            linear-gradient(to bottom, #d4d4d4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

    </section>
  );
}
