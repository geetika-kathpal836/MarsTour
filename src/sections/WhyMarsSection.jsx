import ScrollReveal from "../components/ScrollReveal";
import MissionButton from "../components/MissionButton";
import { motion } from "framer-motion";
const reasons = [{
  title: "Survival",
  desc: "Becoming a multi-planetary species protects humanity from extinction-level events.",
  icon: "🛡️"
}, {
  title: "Discovery",
  desc: "Mars holds secrets about the origins of life in our solar system.",
  icon: "🔬"
}, {
  title: "Innovation",
  desc: "The challenge of Mars drives breakthroughs in energy, medicine, and engineering.",
  icon: "⚡"
}, {
  title: "Frontier",
  desc: "The human spirit thrives when there is a new horizon to reach.",
  icon: "🌅"
}];
const WhyMarsSection = ({
  onOpenMarsFacts
}) => {
  return <section id="why-mars" className="position-relative min-vh-100 d-flex align-items-center py-5 overflow-hidden">
      <div className="section-blend-top" />

      {/* Mars glow in background */}
      <div className="position-absolute end-0 top-50 translate-middle-y rounded-circle pointer-events-none" style={{ width: '500px', height: '500px', background: 'hsl(12 80% 55% / 0.05)', filter: 'blur(120px)' }} />

      <div className="position-relative z-1 w-100 mx-auto px-4" style={{ maxWidth: '1152px' }}>
        {/* Title from left */}
        <ScrollReveal direction="left">
          <p className="text-uppercase mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.3em', color: 'hsl(12 80% 55% / 0.7)' }}>
            Section 02
          </p>
          <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.025em' }}>
            <span className="mars-gradient-text">Why Mars?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.15}>
          <p className="text-secondary mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', maxWidth: '42rem' }}>
            For centuries, we've looked up. Now, it's time to go. Mars represents not just a destination — but a testament to human will.
          </p>
        </ScrollReveal>

        {/* Cards from left, staggered */}
        <div className="row g-4 mb-5">
          {reasons.map((r, i) => <div className="col-12 col-md-6" key={r.title}>
            <ScrollReveal direction="left" delay={0.1 * (i + 1)}>
              <motion.div className="glass-panel p-4 p-md-5 h-100" style={{ cursor: 'default' }} whileHover={{
            scale: 1.02,
            borderColor: "hsl(12 80% 55% / 0.4)"
          }} transition={{
            duration: 0.3
          }}>
                <div className="d-flex align-items-start gap-3">
                  <span className="fs-2">{r.icon}</span>
                  <div>
                    <h3 className="text-uppercase mb-2 text-light" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', transition: 'color 0.3s' }}>
                      {r.title}
                    </h3>
                    <p className="text-secondary small lh-lg m-0" style={{ fontFamily: 'var(--font-body)' }}>
                      {r.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>)}
        </div>

        <ScrollReveal direction="left" delay={0.5}>
          <MissionButton variant="ghost" onClick={onOpenMarsFacts}>
            Explore Mars Facts →
          </MissionButton>
        </ScrollReveal>
      </div>

      <div className="section-blend-bottom" />
    </section>;
};
export default WhyMarsSection;