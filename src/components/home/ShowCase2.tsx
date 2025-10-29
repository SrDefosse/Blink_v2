import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ShowCase2 — Container Scroll Animation (React + Vite, single file)
 * Uso: <ShowCase2 />
 * Opcional: personaliza las imágenes y el título editando los valores dentro del componente.
 */
export default function ShowCase2() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Dimensiones de escala dependientes del viewport
  const scaleRange = isMobile ? [0.7, 0.9] : [1.05, 1];

  // Mapeos del scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Imagen (reemplaza si quieres otra)
  const desktopImage =
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2400&auto=format&fit=crop";
  const mobileImage =
    "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=1200&auto=format&fit=crop";

  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[200px] md:pt-[300px]">
      <div
        ref={containerRef}
        className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      >
        <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
          {/* Header */}
          <motion.div style={{ translateY }} className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-semibold text-black">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </motion.div>

          {/* Card */}
          <motion.div
            style={{
              rotateX,
              scale,
              boxShadow:
                "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
          >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:p-4">
              {/* Contenido (imagen) */}
              <img
                src={isMobile ? mobileImage : desktopImage}
                alt="hero"
                draggable={false}
                className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
