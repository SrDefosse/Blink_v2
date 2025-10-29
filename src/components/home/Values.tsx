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
    { label: "PASSION", bg: "bg-[#FAF8F3]" },
    { label: "VISION", bg: "bg-[#FAF8F3]" },
    { label: "TEAMWORK", bg: "bg-[#FAF8F3]" },
    { label: "INNOVATION", bg: "bg-[#FAF8F3]" },
    { label: "COMMUNICATION", bg: "bg-[#FAF8F3]" },
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
                  [500, -500]
                );

                return (
                  <li
                    key={s.label}
                    className={`flex-none w-screen h-screen ${s.bg} flex items-center justify-center`}
                  >
                    <motion.h2
                      className="text-[10vw] font-semibold leading-none text-gray-900"
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
      </article>
    </main>
  );
}
