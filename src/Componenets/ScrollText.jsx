import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollText = () => {
  const containerRef = useRef < HTMLDivElement > null;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden bg-black relative flex items-center"
    >
      <motion.div
        style={{ x }}
        className="whitespace-nowrap text-[20vw] font-bold text-white"
      >
        sunilsapkota
      </motion.div>
    </div>
  );
};
