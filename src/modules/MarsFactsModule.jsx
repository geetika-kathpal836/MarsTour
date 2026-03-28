import ModuleOverlay from "../components/ModuleOverlay";
import { motion } from "framer-motion";
const facts = [{
  label: "Distance from Sun",
  value: "228M km",
  detail: "1.5x Earth's distance"
}, {
  label: "Diameter",
  value: "6,779 km",
  detail: "About half of Earth"
}, {
  label: "Surface Gravity",
  value: "3.72 m/s²",
  detail: "38% of Earth's gravity"
}, {
  label: "Day Length",
  value: "24h 37m",
  detail: "Almost identical to Earth"
}, {
  label: "Atmosphere",
  value: "95% CO₂",
  detail: "Thin, 1% of Earth's pressure"
}, {
  label: "Temperature",
  value: "-60°C avg",
  detail: "Ranges from -140°C to 20°C"
}, {
  label: "Moons",
  value: "2",
  detail: "Phobos and Deimos"
}, {
  label: "Year Length",
  value: "687 days",
  detail: "Nearly 2 Earth years"
}];
const MarsFactsModule = ({
  isOpen,
  onClose
}) => {
  return <ModuleOverlay isOpen={isOpen} onClose={onClose} title="Mars Facts">
      <div className="mx-auto" style={{ maxWidth: '56rem' }}>
        <p className="text-secondary mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
          Essential data about our destination — the Red Planet.
        </p>

        <div className="row g-4">
          {facts.map((f, i) => <div className="col-12 col-sm-6 col-lg-3" key={f.label}>
              <motion.div className="glass-panel p-4 text-center h-100" style={{ cursor: 'default' }} initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.06 * i
          }} whileHover={{
            scale: 1.05,
            borderColor: "hsl(12 80% 55% / 0.4)"
          }}>
                <div className="fs-5 fw-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'hsl(var(--primary))' }}>{f.value}</div>
                <div className="text-uppercase text-light mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '10px', letterSpacing: '0.1em', transition: 'color 0.3s' }}>
                  {f.label}
                </div>
                <div className="text-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '10px' }}>{f.detail}</div>
              </motion.div>
            </div>)}
        </div>
      </div>
    </ModuleOverlay>;
};
export default MarsFactsModule;