import { motion } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { MagneticButton } from "@/components/motion/MagneticButton";
import heroImage from "@assets/generated_images/Curitiba_corporate_cityscape_hero_6678ecb4.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function HeroSection() {
  const ref = useRef(null);
  const { y: backgroundY } = useParallax(ref, 50);
  const { y: overlayY } = useParallax(ref, 25);

  return (
    <CursorGlow className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0 z-0 will-change-transform"
          style={{ y: backgroundY }}
        >
          <img
            src={heroImage}
            alt="Curitiba skyline"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>

        {/* Parallax Overlay */}
        <motion.div 
          className="absolute inset-0 z-10 will-change-transform"
          style={{ y: overlayY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10" />
        </motion.div>

        {/* Optimized Floating Elements */}
        <div className="absolute inset-0 z-10 opacity-40">
          <div className="floating-particles"></div>
        </div>

        {/* Enhanced Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                lineHeight: "1.1",
              }}
            >
              O futuro das{" "}
              <motion.span 
                className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                agências de propaganda
              </motion.span>{" "}
              no Paraná
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              }}
            >
              Junte-se ao maior sindicato de agências de propaganda do Paraná. 
              Acesse oportunidades exclusivas, banco de talentos e fortaleça 
              sua presença no mercado publicitário.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MagneticButton
                className="bg-gradient-to-r from-accent to-yellow-400 hover:from-accent/90 hover:to-yellow-400/90 text-black font-semibold text-lg px-8 py-4 rounded-lg shadow-lg backdrop-blur-sm border border-accent/20 transition-all duration-300"
                onClick={() => window.location.href = '/cadastro'}
              >
                <span data-testid="button-hero-join">Associe sua agência</span>
              </MagneticButton>
              
              <MagneticButton
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300"
                onClick={() => window.location.href = '/sobre'}
              >
                <span data-testid="button-hero-learn">Saiba mais</span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          variants={itemVariants}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5 shadow-lg"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, borderColor: "rgba(240, 196, 25, 0.8)" }}
          >
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-white to-accent rounded-full mt-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>
    </CursorGlow>
  );
}