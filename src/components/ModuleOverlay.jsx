import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
const ModuleOverlay = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  return <AnimatePresence>
      {isOpen && <motion.div className="position-fixed top-0 bottom-0 start-0 end-0 d-flex flex-column" style={{ zIndex: 50, backgroundColor: 'hsl(var(--background) / 0.95)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }} initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 0.95
    }} transition={{
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }}>
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between px-4 py-3 px-md-5 py-md-4 border-bottom" style={{ borderColor: 'hsl(var(--border) / 0.3) !important' }}>
            <h2 className="text-uppercase m-0" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '0.05em', color: 'hsl(var(--primary))' }}>
              {title}
            </h2>
            <button onClick={onClose} className="glass-panel p-2 p-md-3 rounded-circle border border-0 module-close-btn" aria-label="Close module">
              <X className="text-light" style={{ width: '1.25rem', height: '1.25rem', transition: 'color 0.3s ease' }} />
            </button>
          </div>

          {/* Content */}
          <motion.div className="flex-grow-1 overflow-y-auto px-4 py-5 px-md-5 py-md-5" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2,
        duration: 0.5
      }}>
            {children}
          </motion.div>

          {/* Bottom glow line */}
          <div className="glow-line" />
        </motion.div>}
    </AnimatePresence>;
};
export default ModuleOverlay;