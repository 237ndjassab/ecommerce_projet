import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  speed: number; // vitesse en ms
}

const Counter: React.FC<CounterProps> = ({ target, speed }) => {
  const [count, setCount] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (target <= 0) {
      setCount(0);
      return;
    }

    // 🔥 Durée fixe pour tous les compteurs
    const animationDuration = 1500; // 1.5 seconde

    // Nombre de "ticks" en fonction de la vitesse
    const steps = Math.floor(animationDuration / speed);

    // Incrément dynamique (accélère les grands targets)
    const increment = Math.max(1, Math.floor(target / steps));

    let current = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        setCount(current);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setCount(current);
      }
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [target, speed]);

  return (
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">
      {count}+
    </h2>
  );
};

export default Counter;
