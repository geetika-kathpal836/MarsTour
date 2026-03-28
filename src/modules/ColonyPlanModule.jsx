import ModuleOverlay from "../components/ModuleOverlay";
import { motion } from "framer-motion";
const phases = [{
  phase: "Phase 1",
  title: "Robotic Preparation",
  year: "2030-2035",
  tasks: ["Cargo deliveries", "ISRU testing", "Landing site survey", "Communication relay setup"]
}, {
  phase: "Phase 2",
  title: "First Crew",
  year: "2035-2038",
  tasks: ["6-person crew arrival", "Habitat activation", "Initial resource extraction", "Science operations"]
}, {
  phase: "Phase 3",
  title: "Expansion",
  year: "2038-2045",
  tasks: ["Additional habitats", "Greenhouse agriculture", "Nuclear power plant", "Water ice mining"]
}, {
  phase: "Phase 4",
  title: "Self-Sustaining Colony",
  year: "2045-2060",
  tasks: ["Population growth to 100+", "Local manufacturing", "Birth of first Martian", "Terraforming research"]
}];
const ColonyPlanModule = ({
  isOpen,
  onClose
}) => {
  return <ModuleOverlay isOpen={isOpen} onClose={onClose} title="Future Colony Plan">
      <div className="mx-auto" style={{ maxWidth: '56rem' }}>
        <p className="text-secondary mb-5 lh-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
          A multi-decade roadmap for establishing a permanent human presence on Mars.
        </p>

        <div className="d-flex flex-column gap-4 text-start">
          {phases.map((p, i) => <motion.div key={p.phase} className="glass-panel p-4 p-md-5" initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.15 * i
        }} whileHover={{
          borderColor: "hsl(12 80% 55% / 0.3)"
        }}>
              <div className="d-flex flex-column flex-md-row align-items-md-start gap-3 gap-md-5">
                <div className="mb-3 mb-md-0 flex-shrink-0" style={{ width: '12rem' }}>
                  <div className="text-uppercase mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '10px', letterSpacing: '0.1em', color: 'hsl(var(--primary))' }}>{p.phase}</div>
                  <div className="text-light" style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', letterSpacing: '0.05em', transition: 'color 0.3s' }}>
                    {p.title}
                  </div>
                  <div className="text-secondary mt-1" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>{p.year}</div>
                </div>
                <div className="flex-grow-1">
                  <ul className="row g-2 list-unstyled m-0">
                    {p.tasks.map(task => <li key={task} className="col-12 col-sm-6 d-flex align-items-center gap-2 text-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>
                        <div className="rounded-circle flex-shrink-0" style={{ width: '0.25rem', height: '0.25rem', backgroundColor: 'hsl(var(--primary) / 0.6)' }} />
                        {task}
                      </li>)}
                  </ul>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </ModuleOverlay>;
};
export default ColonyPlanModule;