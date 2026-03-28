import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StarField from "../components/StarField";
import MissionButton from "../components/MissionButton";
const HeroSection = () => {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scrollToNext = () => {
    document.getElementById("why-mars")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="hero" ref={ref} className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="position-absolute top-0 bottom-0 start-0 end-0 opacity-50" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      mixBlendMode: 'screen',
      backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop')",
      y: bgY
    }} />

      {/* Star parallax layer */}
      <motion.div style={{
      y: bgY
    }} className="position-absolute top-0 bottom-0 start-0 end-0">
        <StarField count={150} />
      </motion.div>

      {/* Radial glow */}
      <div className="position-absolute top-0 bottom-0 start-0 end-0" style={{ background: 'radial-gradient(ellipse at center, hsl(12 80% 55% / 0.08) 0%, transparent 70%)' }} />

      {/* Content */}
      <motion.div className="position-relative z-3 text-center px-4 mx-auto" style={{
      maxWidth: '56rem',
      opacity
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.2
      }}>
          <p className="text-uppercase mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', letterSpacing: '0.4em', color: 'hsl(12 80% 55% / 0.8)' }}>
            Humanity's Next Great Leap
          </p>
        </motion.div>

        <motion.h1 className="display-1 fw-bold mb-4 glow-text" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }} initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.2,
        delay: 0.4
      }}>
          <span className="mars-gradient-text">MISSION</span>
          <br />
          <span className="text-light">RED</span>
        </motion.h1>

        <motion.p className="text-secondary mx-auto mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', maxWidth: '36rem' }} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.8
      }}>
          240 million kilometers. One destination. The dream that could redefine what it means to be human.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.2
      }}>
          <MissionButton onClick={scrollToNext}>Begin Mission</MissionButton>
        </motion.div>
      </motion.div>

      {/* Bottom blend */}
      <div className="section-blend-bottom" />
    </section>;
};
export default HeroSection;