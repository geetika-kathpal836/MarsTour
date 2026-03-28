import ModuleOverlay from "../components/ModuleOverlay";
import { motion } from "framer-motion";
const components = [{
  name: "Command Module",
  desc: "Houses the crew during transit — sleeping quarters, controls, and life support.",
  icon: "🚀"
}, {
  name: "Service Module",
  desc: "Propulsion, power generation, and consumables storage for the 7-month journey.",
  icon: "⚙️"
}, {
  name: "Hab Module",
  desc: "Living space with exercise, medical bay, and greenhouse systems.",
  icon: "🏗️"
}, {
  name: "Heat Shield",
  desc: "Ablative thermal protection rated for Mars atmospheric entry at 20,000 km/h.",
  icon: "🛡️"
}, {
  name: "Landing System",
  desc: "Retro-propulsion engines and autonomous terrain-relative navigation.",
  icon: "🎯"
}, {
  name: "Solar Arrays",
  desc: "Deployable solar panels providing 120kW of power during cruise phase.",
  icon: "☀️"
}];
const SpacecraftModule = ({
  isOpen,
  onClose
}) => {
  return <ModuleOverlay isOpen={isOpen} onClose={onClose} title="Spacecraft Systems">
      <div className="mx-auto" style={{ maxWidth: '56rem' }}>
        <p className="text-secondary mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
          A breakdown of the spacecraft architecture designed to carry humans safely across 240 million kilometers.
        </p>

        <div className="row g-4">
          {components.map((c, i) => <div className="col-12 col-md-6 col-lg-4" key={c.name}>
              <motion.div className="glass-panel p-4 h-100 text-start" style={{ cursor: 'default' }} initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.08 * i
          }} whileHover={{
            scale: 1.03,
            borderColor: "hsl(210 60% 45% / 0.4)"
          }}>
                <span className="fs-4 mb-3 d-block">{c.icon}</span>
                <h3 className="text-light text-uppercase mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.1em', transition: 'color 0.3s' }}>
                  {c.name}
                </h3>
                <p className="text-secondary mb-0" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>{c.desc}</p>
              </motion.div>
            </div>)}
        </div>
      </div>
    </ModuleOverlay>;
};
export default SpacecraftModule;