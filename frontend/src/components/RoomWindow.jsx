import React, { useEffect } from "react";
import { Minus, Square, X } from "lucide-react";
import { ROOMS } from "../data/portfolio";
import { CONTENT } from "./RoomContents";

export default function RoomWindow({ roomId, maximized, onClose, onMinimize, onToggleMax }) {
  const room = ROOMS.find((r) => r.id === roomId);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!room) return null;
  const Content = CONTENT[room.id];

  return (
    <div
      className={`absolute z-20 ${
        maximized
          ? "inset-2 sm:inset-3"
          : "inset-2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:top-[4%] sm:bottom-[6%] sm:w-[min(940px,92vw)]"
      }`}
      data-testid={`window-${room.id}`}
      role="dialog"
      aria-label={`${room.label} window`}
    >
      <div className="win h-full">
        <div className="win-title flex items-center justify-between px-3 py-2 sm:px-4">
          <span className="font-pixel text-[9px] sm:text-[10px] truncate" data-testid="window-title">
            {room.label} &mdash; {room.place}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            <button type="button" className="win-ctrl" onClick={onMinimize} aria-label="Minimize" data-testid="window-minimize">
              <Minus size={12} />
            </button>
            <button type="button" className="win-ctrl" onClick={onToggleMax} aria-label="Maximize" data-testid="window-maximize">
              <Square size={10} />
            </button>
            <button type="button" className="win-ctrl close" onClick={onClose} aria-label="Close" data-testid="window-close">
              <X size={12} />
            </button>
          </div>
        </div>
        <div className="win-scroll flex-1 min-h-0 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <Content />
        </div>
      </div>
    </div>
  );
}
