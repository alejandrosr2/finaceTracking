import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number; 
}

const AnimatedNumber = ({ value, duration = 500 }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / duration;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const current = Math.min(increment * progress, end);
      setDisplayValue(current);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span>{displayValue.toFixed(0)}</span>
  );
};

export default AnimatedNumber;
