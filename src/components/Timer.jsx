import React, { useEffect, useState } from "react";

export default function Timer({ keySeed, duration = 15, onTimeUp, running }) {
  // keySeed forces reset when question changes
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [keySeed, duration]);

  useEffect(() => {
    if (!running) return;
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, running, onTimeUp]);

  const percent = Math.max(0, (timeLeft / duration) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2 text-sm">
        <span>Time</span>
        <span>{timeLeft}s</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded overflow-hidden">
        <div style={{ width: `${percent}%` }} className="h-full bg-accent transition-all" />
      </div>
    </div>
  );
}
