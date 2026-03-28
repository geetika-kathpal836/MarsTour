import { motion } from "framer-motion";
const ScrollReveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0
}) => {
  const offsets = {
    up: {
      y: 50,
      x: 0
    },
    left: {
      x: -80,
      y: 0
    },
    right: {
      x: 80,
      y: 0
    }
  };
  return <motion.div className={className} initial={{
    opacity: 0,
    ...offsets[direction]
  }} whileInView={{
    opacity: 1,
    x: 0,
    y: 0
  }} viewport={{
    once: true,
    margin: "-80px"
  }} transition={{
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1]
  }}>
      {children}
    </motion.div>;
};
export default ScrollReveal;