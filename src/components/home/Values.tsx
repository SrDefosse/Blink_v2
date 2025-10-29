import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Values() {
  const sectionRef = useRef(null);

  // Recalcular ancho del viewport para el desplazamiento horizontal
  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slides = [
    { label: "PASSION", bg: "bg-red-400" },
    { label: "WORK", bg: "bg-blue-400" },
    { label: "MOTIVATION", bg: "bg-orange-400" },
    { label: "INSPIRATION", bg: "bg-yellow-400" },
    { label: "BELIVE", bg: "bg-green-400" },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalShift = (slides.length - 1) * vw;
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalShift]);

  return (
    <main>
      <article>
        <header className="text-white relative w-full bg-slate-950 grid place-content-center h-[80vh]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="text-6xl font-bold text-center tracking-tight">
            I know You Love to Scroll <br />
            So Scroll
          </h1>
        </header>

        {/* Sección alta para pin; el wrapper sticky oculta el overflow */}
        <section ref={sectionRef} className="h-[500vh] relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            <motion.ul className="flex h-full will-change-transform" style={{ x }}>
              {slides.map((s, i) => {
                const segStart = i / slides.length;
                const segEnd = (i + 1) / slides.length;
                const headerX = useTransform(
                  scrollYProgress,
                  [segStart, segEnd],
                  [800, -800]
                );

                return (
                  <li
                    key={s.label}
                    className={`flex-none w-screen h-screen ${s.bg} flex items-center justify-center`}
                  >
                    <motion.h2
                      className="text-[20vw] font-semibold leading-none text-black"
                      style={{ x: headerX }}
                    >
                      {s.label}
                    </motion.h2>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        <footer className="bg-red-600 text-white grid place-content-center h-[80vh]">
          <p>
            Created By{" "}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/mattgperry"
            >
              Matt Perry
            </a>
          </p>
        </footer>
      </article>
    </main>
  );
}
