import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StarField from "../components/StarField";
import ScrollReveal from "../components/ScrollReveal";
import MissionButton from "../components/MissionButton";
const DeepSpaceSection = ({
  onOpenSpacecraft
}) => {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return <section id="deep-space" ref={ref} className="position-relative min-vh-100 d-flex align-items-center py-5 overflow-hidden">
      <div className="section-blend-top" />

      <motion.div style={{
      y: starsY
    }} className="position-absolute top-0 bottom-0 start-0 end-0">
        <StarField count={200} />
      </motion.div>

      {/* Floating spacecraft indicator */}
      <motion.div className="position-absolute start-50 top-50 translate-middle pointer-events-none" animate={{
      y: [-10, 10, -10]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}>
        <div className="rounded-circle opacity-50" style={{ width: '0.5rem', height: '0.5rem', background: 'hsl(var(--accent))', boxShadow: '0 0 20px hsl(var(--accent))' }} />
      </motion.div>

      <div className="position-relative z-1 w-100 mx-auto px-4" style={{ maxWidth: '64rem' }}>
        <ScrollReveal>
          <p className="text-uppercase mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.3em', color: 'hsl(var(--accent) / 0.7)' }}>
            Section 04
          </p>
          <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.025em' }}>
            <span className="text-light">Deep Space</span>{" "}
            <span style={{ color: 'hsl(var(--accent))' }}>Voyage</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-secondary mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', maxWidth: '42rem' }}>
            Seven months of silence. 240 million kilometers of nothing. Only the hum of the ship and the distant glow of a red dot growing brighter.
          </p>
        </ScrollReveal>

        {/* HUD-style data panel */}
        <ScrollReveal delay={0.3}>
          <div className="glass-panel p-4 p-md-5" style={{ maxWidth: '42rem' }}>
            <div className="d-flex align-items-center gap-2 mb-4">
              <div className="rounded-circle pulse-glow" style={{ width: '0.5rem', height: '0.5rem', background: 'hsl(var(--accent))' }} />
              <span className="text-uppercase mb-0" style={{ fontFamily: 'var(--font-display)', fontSize: '10px', letterSpacing: '0.3em', color: 'hsl(var(--accent))' }}>
                Spacecraft Telemetry
              </span>
            </div>
            <div className="row g-3">
              {[{
              label: "Distance",
              value: "142M km"
            }, {
              label: "Velocity",
              value: "24.6 km/s"
            }, {
              label: "ETA",
              value: "124 days"
            }, {
              label: "Status",
              value: "Nominal"
            }].map(d => <div className="col-6 col-md-3" key={d.label}>
                  <div className="text-secondary text-uppercase" style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.05em' }}>{d.label}</div>
                  <div className="text-light mt-1" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}>{d.value}</div>
                </div>)}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-5">
            <MissionButton variant="ghost" onClick={onOpenSpacecraft}>
              Explore Spacecraft Systems →
            </MissionButton>
          </div>
        </ScrollReveal>
      </div>

      <div className="section-blend-bottom" />
    </section>;
};
export default DeepSpaceSection;