import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useParallax";

export function ScrollProgress() {
  const scrollYProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}