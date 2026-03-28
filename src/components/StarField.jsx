import { useMemo } from "react";
const StarField = ({
  count = 120
}) => {
  const stars = useMemo(() => {
    return Array.from({
      length: count
    }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 4
    }));
  }, [count]);
  return <div className="position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden pointer-events-none">
      {stars.map(star => <div key={star.id} className="position-absolute rounded-circle" style={{
      backgroundColor: 'hsl(var(--foreground))',
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`
    }} />)}
    </div>;
};
export default StarField;