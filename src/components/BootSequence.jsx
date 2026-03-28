import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const lines = ["INITIALIZING MISSION RED...", "NAVIGATION SYSTEMS: ONLINE", "LIFE SUPPORT: NOMINAL", "COMMUNICATION LINK: ESTABLISHED", "ALL SYSTEMS GO", "LAUNCHING EXPERIENCE..."];
const BootSequence = ({
  onComplete
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => setCurrentLine(p => p + 1), 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setDone(true), 600);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);
  useEffect(() => {
    if (done) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [done, onComplete]);
  return <AnimatePresence>
      {!done && <motion.div className="position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center" style={{ zIndex: 100, backgroundColor: 'hsl(var(--background))' }} exit={{
      opacity: 0
    }} transition={{
      duration: 0.8
    }}>
          <div className="w-100 px-4 px-md-5" style={{ maxWidth: '32rem' }}>
            <div className="d-flex align-items-center gap-3 mb-5">
              <div className="rounded-circle pulse-glow" style={{ width: '0.75rem', height: '0.75rem', backgroundColor: 'hsl(var(--primary))' }} />
              <span className="text-uppercase" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.3em', color: 'hsl(var(--primary))' }}>
                Mission Red
              </span>
            </div>
            <div className="d-flex flex-column gap-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>
              {lines.slice(0, currentLine).map((line, i) => <motion.div key={i} initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} style={{ letterSpacing: '0.05em', color: i === currentLine - 1 ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))' }}>
                  <span className="text-secondary me-2">{">"}</span>
                  {line}
                </motion.div>)}
              {currentLine < lines.length && <span className="d-inline-block ms-4 opacity-50 pulse-glow" style={{ width: '0.5rem', height: '1rem', backgroundColor: 'hsl(var(--primary))' }} />}
            </div>
            {/* Progress bar */}
            <div className="mt-5 rounded-pill overflow-hidden" style={{ height: '1px', backgroundColor: 'hsl(var(--border) / 0.3)' }}>
              <motion.div className="h-100" style={{ backgroundColor: 'hsl(var(--primary))' }} initial={{
            width: "0%"
          }} animate={{
            width: `${currentLine / lines.length * 100}%`
          }} transition={{
            duration: 0.3
          }} />
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>;
};
export default BootSequence;