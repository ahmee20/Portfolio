import React, { useState } from "react";
import { X } from "lucide-react";

// Pixel-art resident: hoodie, headphones, jeans.
export function PixelMan({ size = 72 }) {
  const P = ({ x, y, w = 1, h = 1, c }) => <rect x={x} y={y} width={w} height={h} fill={c} />;
  const skin = "#c98d63";
  const hair = "#2b2118";
  const hood = "#2f3d4f";
  const hoodL = "#3d4f66";
  const jeans = "#2c3a58";
  const shoe = "#16171c";
  const phones = "#d9962b";
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 20 26" shapeRendering="crispEdges" aria-hidden="true">
      {/* hair */}
      <P x={6} y={1} w={8} h={2} c={hair} />
      <P x={5} y={2} w={10} h={2} c={hair} />
      {/* headphones */}
      <P x={4} y={3} w={1} h={5} c={phones} />
      <P x={15} y={3} w={1} h={5} c={phones} />
      <P x={5} y={2} w={10} h={1} c={phones} />
      <P x={3} y={5} w={2} h={3} c={phones} />
      <P x={15} y={5} w={2} h={3} c={phones} />
      {/* face */}
      <P x={6} y={4} w={8} h={6} c={skin} />
      <P x={5} y={4} w={1} h={4} c={hair} />
      <P x={14} y={4} w={1} h={4} c={hair} />
      <P x={8} y={6} w={1} h={1} c="#16171c" />
      <P x={11} y={6} w={1} h={1} c="#16171c" />
      <P x={8} y={8} w={4} h={1} c="#8a5a3a" />
      {/* beard */}
      <P x={6} y={9} w={8} h={1} c={hair} />
      <P x={7} y={10} w={6} h={1} c={hair} />
      {/* hoodie */}
      <P x={5} y={11} w={10} h={7} c={hood} />
      <P x={7} y={11} w={6} h={2} c={hoodL} />
      <P x={3} y={12} w={2} h={5} c={hood} />
      <P x={15} y={12} w={2} h={5} c={hood} />
      <P x={9} y={13} w={2} h={3} c={hoodL} />
      {/* hands */}
      <P x={3} y={17} w={2} h={1} c={skin} />
      <P x={15} y={17} w={2} h={1} c={skin} />
      {/* jeans */}
      <P x={5} y={18} w={10} h={5} c={jeans} />
      <P x={9} y={19} w={2} h={4} c="#1f2a42" />
      {/* shoes */}
      <P x={4} y={23} w={5} h={2} c={shoe} />
      <P x={11} y={23} w={5} h={2} c={shoe} />
      <P x={4} y={24} w={5} h={1} c="#f3efe6" />
      <P x={11} y={24} w={5} h={1} c="#f3efe6" />
    </svg>
  );
}

export default function Guide({ message, hidden = false }) {
  const [dismissed, setDismissed] = useState(false);
  return (
    <div
      className="guide-on-player pointer-events-none z-30 flex items-end gap-3"
      data-testid="guide"
      data-message-visible={!hidden && !dismissed}
      style={hidden ? { display: "none" } : undefined}
    >
      {!dismissed && (
        <div className="bubble guide-bubble max-w-[240px] sm:max-w-[300px] pl-4 pr-10 py-3 text-[12px] sm:text-[13px] leading-snug" data-testid="guide-bubble">
          <button type="button" className="guide-dismiss" onClick={() => setDismissed(true)} aria-label="Hide guide message" title="Hide message" data-testid="guide-dismiss-button">
            <X size={14} />
          </button>
          <p data-testid="guide-message">{message}</p>
        </div>
      )}
      <button type="button" className="guide-figure guide-toggle" onClick={() => setDismissed((value) => !value)} aria-label={dismissed ? "Show guide message" : "Hide guide message"} aria-expanded={!dismissed} title={dismissed ? "Show message" : "Hide message"} data-testid="guide-toggle-button">
        <PixelMan size={56} />
      </button>
    </div>
  );
}
