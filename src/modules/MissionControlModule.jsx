import ModuleOverlay from "../components/ModuleOverlay";
import { motion } from "framer-motion";
const systems = [{
  name: "Navigation",
  status: "Online",
  health: 98
}, {
  name: "Propulsion",
  status: "Nominal",
  health: 95
}, {
  name: "Communication",
  status: "Active",
  health: 100
}, {
  name: "Life Support",
  status: "Stable",
  health: 97
}, {
  name: "Power Systems",
  status: "Optimal",
  health: 99
}, {
  name: "Thermal Control",
  status: "Regulated",
  health: 94
}];
const MissionControlModule = ({
  isOpen,
  onClose
}) => {
  return <ModuleOverlay isOpen={isOpen} onClose={onClose} title="Mission Control">
      <div className="mx-auto" style={{ maxWidth: '56rem' }}>
        <p className="text-secondary mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
          Real-time mission oversight. All systems are monitored continuously from launch through Mars orbital insertion.
        </p>

        <div className="row g-4">
          {systems.map((sys, i) => <div className="col-12 col-md-6" key={sys.name}>
              <motion.div className="glass-panel p-4 h-100" style={{ cursor: 'default' }} initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1 * i
          }} whileHover={{
            scale: 1.02
          }}>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="text-uppercase text-light m-0" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.1em', transition: 'color 0.3s' }}>
                    {sys.name}
                  </h3>
                  <span className="text-uppercase" style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.05em', color: 'hsl(var(--accent))' }}>
                    {sys.status}
                  </span>
                </div>
                <div className="rounded-pill overflow-hidden" style={{ height: '0.25rem', backgroundColor: 'hsl(var(--border) / 0.4)' }}>
                  <motion.div className="h-100 rounded-pill" style={{ background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))' }} initial={{
                width: 0
              }} animate={{
                width: `${sys.health}%`
              }} transition={{
                duration: 1,
                delay: 0.2 + 0.1 * i
              }} />
                </div>
                <div className="text-secondary mt-2" style={{ fontFamily: 'var(--font-display)', fontSize: '10px' }}>{sys.health}%</div>
              </motion.div>
            </div>)}
        </div>
      </div>
    </ModuleOverlay>;
};
export default MissionControlModule;