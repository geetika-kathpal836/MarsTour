import ScrollReveal from "../components/ScrollReveal";
import MissionButton from "../components/MissionButton";
import { motion } from "framer-motion";
const ColonySection = ({
  onOpenColonyPlan
}) => {
  return <section id="colony" className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden py-5">
      <div className="section-blend-top" />

      {/* Mars surface glow */}
      <div className="position-absolute bottom-0 start-0 w-100 pointer-events-none" style={{ height: '50%', background: 'linear-gradient(to top, hsl(var(--primary) / 0.1), hsl(var(--mars-orange) / 0.05), transparent)' }} />

      <div className="position-relative z-1 mx-auto px-4 text-center" style={{ maxWidth: '56rem' }}>
        <ScrollReveal>
          <p className="text-uppercase mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.3em', color: 'hsl(var(--primary) / 0.7)' }}>
            Section 06
          </p>
          <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.025em' }}>
            <span className="text-light">First Steps.</span>
            <br />
            <span className="mars-gradient-text">New World.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary mx-auto mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', maxWidth: '36rem' }}>
            Boots press into Martian soil. A footprint that will outlast civilizations. We are no longer a one-planet species.
          </p>
        </ScrollReveal>

        {/* Colony vision cards */}
        <ScrollReveal delay={0.3}>
          <div className="row g-4 mb-5">
            {[{
            title: "Habitat",
            desc: "Pressurized domes with Earth-like conditions",
            icon: "🏠"
          }, {
            title: "Agriculture",
            desc: "Hydroponic farms growing food on Mars",
            icon: "🌱"
          }, {
            title: "Energy",
            desc: "Solar arrays and nuclear micro-reactors",
            icon: "☀️"
          }].map((item, i) => <div className="col-12 col-md-4" key={item.title}>
              <motion.div className="glass-panel p-4 text-start h-100" style={{ cursor: 'default' }} whileHover={{
            scale: 1.03,
            borderColor: "hsl(12 80% 55% / 0.4)"
          }} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1 * i
          }}>
                <span className="fs-3 mb-3 d-block">{item.icon}</span>
                <h3 className="text-uppercase mb-2 text-light" style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', letterSpacing: '0.1em', transition: 'color 0.3s' }}>
                  {item.title}
                </h3>
                <p className="text-secondary small m-0" style={{ fontFamily: 'var(--font-body)' }}>{item.desc}</p>
              </motion.div>
            </div>)}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <MissionButton variant="ghost" onClick={onOpenColonyPlan}>
            View Colony Plan →
          </MissionButton>
        </ScrollReveal>

        {/* Closing statement */}
        <ScrollReveal delay={0.5}>
          <div className="glow-line my-5" />
          <p className="text-secondary text-uppercase" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.2em' }}>
            The journey has just begun.
          </p>
          <p className="mt-4" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground) / 0.6)' }}>
            Mission Red — A cinematic web experience
          </p>
        </ScrollReveal>
      </div>
    </section>;
};
export default ColonySection;