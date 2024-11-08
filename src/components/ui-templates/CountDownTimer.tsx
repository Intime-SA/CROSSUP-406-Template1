import { useEffect, useState } from "react";
import { useDynamicFont } from "@/app/fonts/fonts"; // Import dynamic font hook

export const CountdownTimer: React.FC<{ initialTime: number }> = ({
  initialTime,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const dynamicFont = useDynamicFont(); // Get the current font style

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className="text-[var(--border-components)] text-xs font-semibold uppercase tracking-wide"
      style={{ fontFamily: dynamicFont.style.fontFamily }}
    >
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:00
    </div>
  );
};
