import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
const MarsEntrySection = () => {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const dustOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.6]);
  const glowScale = useTransform(scrollYProgress, [0.2, 0.7], [0.5, 1.5]);
  const dustParticles = useMemo(() => Array.from({
    length: 30
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 3
  })), []);
  return <section id="mars-entry" ref={ref} className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden py-5">
      <div className="section-blend-top" />

      {/* Atmospheric glow */}
      <motion.div className="position-absolute top-0 bottom-0 start-0 end-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse at bottom, hsl(12 80% 55% / 0.15) 0%, transparent 60%)',
      scale: glowScale
    }} />

      {/* Dust particles */}
      <motion.div className="position-absolute top-0 bottom-0 start-0 end-0 pointer-events-none" style={{
      opacity: dustOpacity
    }}>
        {dustParticles.map(p => <motion.div key={p.id} className="position-absolute rounded-circle" style={{
        backgroundColor: 'hsl(var(--mars-orange) / 0.4)',
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: p.size,
        height: p.size
      }} animate={{
        x: [0, Math.random() * 60 - 30],
        y: [0, Math.random() * -40],
        opacity: [0, 0.6, 0]
      }} transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity
      }} />)}
      </motion.div>

      <div className="position-relative z-1 mx-auto px-4 text-center" style={{ maxWidth: '56rem' }}>
        <ScrollReveal>
          <p className="text-uppercase mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.3em', color: 'hsl(var(--primary) / 0.7)' }}>
            Section 05
          </p>
          <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.025em' }}>
            <span className="mars-gradient-text">Mars Entry</span>
            <br />
            <span className="text-light">&amp; Landing</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary mx-auto mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', maxWidth: '36rem' }}>
            Seven minutes of terror. The atmosphere screams at 2,000°C. Parachutes deploy. Retro rockets fire. Every second counts.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
            {[{
            phase: "01",
            name: "Atmospheric Entry",
            status: "2,000°C"
          }, {
            phase: "02",
            name: "Parachute Deploy",
            status: "Mach 1.7"
          }, {
            phase: "03",
            name: "Heat Shield Sep.",
            status: "Critical"
          }, {
            phase: "04",
            name: "Powered Descent",
            status: "Final"
          }].map((step, i) => <motion.div key={step.phase} className="glass-panel p-3 p-md-4 text-start" style={{ width: '150px', cursor: 'default' }} whileHover={{
            scale: 1.05,
            borderColor: "hsl(12 80% 55% / 0.5)"
          }} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1 * i,
            duration: 0.5
          }}>
                <div className="mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '10px', color: 'hsl(var(--primary) / 0.6)', letterSpacing: '0.1em' }}>
                  PHASE {step.phase}
                </div>
                <div className="text-light" style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', letterSpacing: '0.05em', transition: 'color 0.3s' }}>
                  {step.name}
                </div>
                <div className="text-secondary mt-1" style={{ fontFamily: 'var(--font-body)', fontSize: '10px' }}>{step.status}</div>
              </motion.div>)}
          </div>
        </ScrollReveal>
      </div>

      <div className="section-blend-bottom" />
    </section>;
};
export default MarsEntrySection;