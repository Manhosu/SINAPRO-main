import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export function useParallax(ref: RefObject<HTMLElement>, offset: number = 300) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return { y, opacity, scrollYProgress };
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}