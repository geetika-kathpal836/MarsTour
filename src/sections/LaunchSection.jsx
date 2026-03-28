import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import MissionButton from "../components/MissionButton";
/* Detailed rocket SVG component */
const RocketSVG = () => <svg width="64" height="160" viewBox="0 0 64 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Nose cone */}
    <path d="M32 0 C32 0, 24 30, 24 50 L40 50 C40 30, 32 0, 32 0Z" fill="url(#noseCone)" />
    {/* Window */}
    <circle cx="32" cy="42" r="5" fill="#0a1628" stroke="hsl(210, 60%, 45%)" strokeWidth="1.5" />
    <circle cx="32" cy="42" r="3" fill="hsl(210, 60%, 55%)" opacity="0.3" />
    {/* Body */}
    <rect x="24" y="50" width="16" height="60" rx="1" fill="url(#bodyGrad)" />
    {/* Body detail lines */}
    <line x1="24" y1="65" x2="40" y2="65" stroke="hsl(210, 20%, 40%)" strokeWidth="0.5" />
    <line x1="24" y1="85" x2="40" y2="85" stroke="hsl(210, 20%, 40%)" strokeWidth="0.5" />
    {/* Side accent stripe */}
    <rect x="25" y="52" width="2" height="56" rx="1" fill="hsl(12, 80%, 55%)" opacity="0.6" />
    <rect x="37" y="52" width="2" height="56" rx="1" fill="hsl(12, 80%, 55%)" opacity="0.6" />
    {/* Left fin */}
    <path d="M24 95 L10 120 L10 125 L24 110Z" fill="url(#finGrad)" />
    {/* Right fin */}
    <path d="M40 95 L54 120 L54 125 L40 110Z" fill="url(#finGrad)" />
    {/* Center fin / nozzle base */}
    <path d="M28 110 L28 118 L36 118 L36 110Z" fill="hsl(230, 15%, 25%)" />
    {/* Engine nozzle */}
    <path d="M29 118 L27 128 L37 128 L35 118Z" fill="hsl(230, 15%, 20%)" />
    <ellipse cx="32" cy="128" rx="5" ry="2" fill="hsl(230, 15%, 18%)" />

    <defs>
      <linearGradient id="noseCone" x1="32" y1="0" x2="32" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(210, 20%, 85%)" />
        <stop offset="100%" stopColor="hsl(210, 15%, 55%)" />
      </linearGradient>
      <linearGradient id="bodyGrad" x1="32" y1="50" x2="32" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(210, 15%, 65%)" />
        <stop offset="50%" stopColor="hsl(210, 10%, 50%)" />
        <stop offset="100%" stopColor="hsl(210, 10%, 35%)" />
      </linearGradient>
      <linearGradient id="finGrad" x1="0" y1="95" x2="0" y2="125" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(12, 80%, 55%)" />
        <stop offset="100%" stopColor="hsl(12, 60%, 35%)" />
      </linearGradient>
    </defs>
  </svg>;

/* ExhaustFlame component */
const ExhaustFlame = () => <div className="position-relative d-flex flex-column align-items-center" style={{ marginTop: '-0.25rem' }}>
    {/* Inner bright flame */}
    <motion.div style={{
    width: '1rem', height: '2.5rem',
    borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px',
    background: 'linear-gradient(to bottom, hsl(var(--foreground)), hsl(var(--mars-orange)), hsl(var(--primary)))',
    filter: 'blur(2px)'
  }} animate={{
    scaleY: [1, 1.3, 0.9, 1.1, 1],
    scaleX: [1, 0.85, 1.1, 0.9, 1]
  }} transition={{
    duration: 0.3,
    repeat: Infinity,
    repeatType: "mirror"
  }} />
    {/* Outer glow flame */}
    <motion.div className="position-absolute top-0" style={{
    width: '2rem', height: '4rem',
    borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px',
    background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.8), hsl(var(--mars-orange) / 0.4), transparent)',
    filter: 'blur(12px)'
  }} animate={{
    scaleY: [1, 1.4, 0.8, 1.2, 1],
    opacity: [0.7, 1, 0.6, 0.9, 0.7]
  }} transition={{
    duration: 0.25,
    repeat: Infinity,
    repeatType: "mirror"
  }} />
    {/* Wide ambient glow */}
    <motion.div className="position-absolute" style={{
    top: '0.5rem', width: '4rem', height: '6rem',
    borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px',
    background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.2), transparent)',
    filter: 'blur(24px)'
  }} animate={{
    scaleY: [1, 1.2, 1],
    opacity: [0.4, 0.7, 0.4]
  }} transition={{
    duration: 0.5,
    repeat: Infinity
  }} />
    {/* Spark particles */}
    {[...Array(6)].map((_, i) => <motion.div key={i} className="position-absolute rounded-circle" style={{
    width: '0.25rem', height: '0.25rem',
    backgroundColor: 'hsl(var(--mars-orange))',
    top: 20 + Math.random() * 20,
    left: 16 + (Math.random() - 0.5) * 30
  }} animate={{
    y: [0, 30 + Math.random() * 40],
    x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
    opacity: [1, 0],
    scale: [1, 0.3]
  }} transition={{
    duration: 0.6 + Math.random() * 0.5,
    repeat: Infinity,
    delay: Math.random() * 0.5
  }} />)}
  </div>;

/* Smoke trail particles */
const SmokeTrail = () => {
  const particles = useMemo(() => Array.from({
    length: 12
  }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 60,
    delay: Math.random() * 2,
    size: Math.random() * 10 + 6,
    duration: Math.random() * 2 + 2
  })), []);
  return <div className="position-absolute start-50 translate-middle-x pointer-events-none" style={{ top: '130px' }}>
      {particles.map(p => <motion.div key={p.id} className="position-absolute rounded-circle" style={{
      background: 'hsl(var(--foreground) / 0.05)',
      width: p.size,
      height: p.size,
      left: p.x
    }} animate={{
      y: [0, 80],
      opacity: [0.3, 0],
      scale: [0.5, 2.5],
      x: [p.x, p.x + (Math.random() - 0.5) * 40]
    }} transition={{
      duration: p.duration,
      delay: p.delay,
      repeat: Infinity
    }} />)}
    </div>;
};

const LaunchSection = ({
  onOpenMissionControl
}) => {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const rocketY = useTransform(scrollYProgress, [0.3, 0.8], [120, -250]);
  const flameOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.85], [0, 1, 0.5]);
  const rocketRotate = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, -1, 2]);
  
  return <section id="launch" ref={ref} className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden py-5">
      <div className="section-blend-top" />

      {/* Rocket assembly */}
      <motion.div className="position-absolute start-50 translate-middle-x z-1 pointer-events-none" style={{
      y: rocketY,
      rotate: rocketRotate
    }}>
        <div className="position-relative d-flex flex-column align-items-center">
          {/* Rocket glow halo */}
          <motion.div className="position-absolute start-50 translate-middle-x rounded-circle" style={{
          top: '-1rem', width: '5rem', height: '5rem', background: 'hsl(var(--accent) / 0.1)', filter: 'blur(40px)',
          opacity: flameOpacity
        }} />
          
          {/* The rocket */}
          <div>
            <RocketSVG />
          </div>

          {/* Exhaust flame */}
          <motion.div style={{
          opacity: flameOpacity
        }}>
            <ExhaustFlame />
          </motion.div>

          {/* Smoke trail */}
          <motion.div style={{
          opacity: flameOpacity
        }}>
            <SmokeTrail />
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="position-relative z-3 mx-auto px-4 text-center" style={{ maxWidth: '56rem' }}>
        <ScrollReveal>
          <p className="text-uppercase mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.3em', color: 'hsl(var(--primary) / 0.7)' }}>
            Section 03
          </p>
          <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.025em' }}>
            <span className="text-light">Launch</span>{" "}
            <span className="mars-gradient-text">Sequence</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary mx-auto mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', maxWidth: '36rem' }}>
            T-minus zero. Engines ignite. 7.5 million pounds of thrust propel us beyond Earth's gravity — there is no turning back.
          </p>
        </ScrollReveal>

        {/* Countdown numbers */}
        <ScrollReveal delay={0.3}>
          <div className="d-flex justify-content-center gap-4 mb-5">
            {[{
            val: "7.5M",
            label: "lbs thrust"
          }, {
            val: "28,000",
            label: "km/h"
          }, {
            val: "8.5",
            label: "min to orbit"
          }].map(stat => <div key={stat.label} className="glass-panel px-3 py-2 px-md-4 py-md-3 text-center">
                <div className="fw-bold" style={{ fontFamily: 'var(--font-display)', color: 'hsl(var(--primary))', fontSize: '1.5rem' }}>{stat.val}</div>
                <div className="text-secondary text-uppercase mt-1" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>)}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <MissionButton variant="ghost" onClick={onOpenMissionControl}>
            Open Mission Control →
          </MissionButton>
        </ScrollReveal>
      </div>

      {/* Bottom glow */}
      <div className="position-absolute bottom-0 start-0 w-100 pointer-events-none" style={{ height: '10rem', background: 'linear-gradient(to top, hsl(var(--primary) / 0.05), transparent)' }} />
      <div className="section-blend-bottom" />
    </section>;
};
export default LaunchSection;