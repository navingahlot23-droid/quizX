import React from "react";

export default function ProgressBar({ current, total }) {
  const pct = total ? Math.round((current / total) * 100) : 0;
  return (
    <div className="w-full mt-4">
      <div className="flex justify-between text-xs mb-2">
        <span>Question {current}/{total}</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded">
        <div style={{ width: `${pct}%` }} className="h-full bg-accent2 rounded" />
      </div>
    </div>
  );
}
