import React, { useEffect, useState } from "react";
import { BOOT_LINES } from "../data/portfolio";

function pad(text, total) {
  const dots = Math.max(2, total - text.length);
  return text + ".".repeat(dots);
}

export default function BootScreen({ onEnter }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= BOOT_LINES.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 380);
    return () => clearTimeout(t);
  }, [shown]);

  const ready = shown >= BOOT_LINES.length;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter") onEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onEnter]);

  const pct = Math.round((shown / BOOT_LINES.length) * 100);

  return (
    <div
      className="loft-root fade-in items-center justify-center px-6"
      data-testid="boot-screen"
    >
      <div className="w-full max-w-xl">
        <h1 className="font-pixel text-[22px] sm:text-[28px]" style={{ color: "var(--loft-amber)" }}>
          LOFT OS
        </h1>
        <p className="font-pixel mt-5 text-[8px] sm:text-[9px]" style={{ color: "#b9bfcf" }}>
          V1.0 &middot; A PORTFOLIO YOU CAN WALK AROUND IN
        </p>

        <div className="mt-10 space-y-3 min-h-[120px]">
          {BOOT_LINES.slice(0, shown).map((line) => (
            <p
              key={line.text}
              className="boot-line font-pixel text-[8px] sm:text-[9px] whitespace-pre"
              style={{ color: "#e8e2d4" }}
            >
              {pad(line.text, 24)}
              <span style={{ color: "#5fc9b5" }}>{line.result}</span>
            </p>
          ))}
        </div>

        <div className="boot-bar mt-10" aria-label="Boot progress">
          <span style={{ width: `${pct}%` }} />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <button
            type="button"
            className="px-btn"
            onClick={onEnter}
            data-testid="boot-enter-button"
            style={{ opacity: ready ? 1 : 0.85 }}
          >
            Unlock the door
          </button>
          <span className="font-pixel text-[8px]" style={{ color: "#8b92a6" }}>
            OR PRESS ENTER
          </span>
        </div>
      </div>
    </div>
  );
}
