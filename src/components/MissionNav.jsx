import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const sections = [{
  id: "hero",
  label: "Launch"
}, {
  id: "why-mars",
  label: "Why Mars"
}, {
  id: "launch",
  label: "Ignition"
}, {
  id: "deep-space",
  label: "Voyage"
}, {
  id: "mars-entry",
  label: "Landing"
}, {
  id: "colony",
  label: "Colony"
}];
const MissionNav = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <nav className="position-fixed end-0 top-50 translate-middle-y d-flex flex-column align-items-end gap-3 pe-3 pe-md-4" style={{ zIndex: 40 }}>
      {sections.map((s, i) => <button key={s.id} onClick={() => scrollTo(s.id)} className="d-flex align-items-center gap-3 mission-nav-btn" aria-label={`Navigate to ${s.label}`}>
          <span className={`mission-nav-text ${i === active ? "active" : ""}`}>
            {s.label}
          </span>
          <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '0.75rem', height: '0.75rem' }}>
            <div className={`mission-nav-dot ${i === active ? "active" : ""}`} />
            {i === active && <motion.div className="position-absolute top-0 bottom-0 start-0 end-0 rounded-circle border" style={{ borderColor: 'hsl(var(--primary) / 0.5)' }} layoutId="navRing" transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }} />}
          </div>
        </button>)}
    </nav>;
};
export default MissionNav;