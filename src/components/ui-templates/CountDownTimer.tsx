import { useEffect, useState } from "react";

// COMPONENTE DE MANEJADOR DE TIMER
export const CountdownTimer: React.FC<{ initialTime: number }> = ({
  initialTime,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // REINICIALIZA
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-[var(--border-components)] text-xs font-semibold uppercase tracking-wide">
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:00
    </div>
  );
};
