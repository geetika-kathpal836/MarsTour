import { motion } from "framer-motion";
const MissionButton = ({
  children,
  onClick,
  variant = "primary",
  className = ""
}) => {
  const base = "btn-mission";
  const variants = {
    primary: "btn-mission-primary",
    ghost: "btn-mission-ghost"
  };
  return <motion.button className={`${base} ${variants[variant]} ${className}`} onClick={onClick} whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.97
  }}>
      {children}
    </motion.button>;
};
export default MissionButton;