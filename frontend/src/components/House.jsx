import React from "react";
import { ROOMS } from "../data/portfolio";
import RoomArt from "./RoomArt";

export default function House({ onOpen, onHover, active }) {
  return (
    <div className="house-in loft-house mx-auto px-3 sm:px-6" data-testid="house">
      {/* Roof */}
      <div className="house-roof">
        <div className="roof-plane" aria-hidden="true" />
        <div className="roof-lettering" data-testid="roof-branding" aria-label="Ahmad's Loft">
          <span className="font-pixel">AHMAD’S LOFT</span>
        </div>
        {/* Chimney */}
        <div
          className="roof-chimney"
          style={{ background: "#5c2a22", borderTop: "6px solid #3f1d17" }}
        />
        {/* Roof edge */}
        <div className="roof-edge" />
      </div>

      {/* Frame */}
      <div
        className="p-2 sm:p-3"
        style={{ background: "var(--loft-wood)", boxShadow: "0 10px 0 rgba(0,0,0,0.35)" }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3"
          style={{ background: "var(--loft-wood)" }}
        >
          {ROOMS.map((room) => (
            <button
              key={room.id}
              type="button"
              className="room aspect-[21/20]"
              onClick={() => onOpen(room.id)}
              onMouseEnter={() => onHover(room.id)}
              onMouseLeave={() => onHover(null)}
              onFocus={() => onHover(room.id)}
              onBlur={() => onHover(null)}
              aria-label={`${room.label} room`}
              data-testid={`room-${room.id}`}
              style={{
                outline: active === room.id ? "3px solid var(--loft-amber)" : "none",
                outlineOffset: "-3px",
              }}
            >
              <RoomArt room={room} />
              <span className="room-tag" data-testid={`room-label-${room.id}`}>{room.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Foundation */}
      <div className="h-3 mx-2" style={{ background: "#3a261a" }} />
      <div className="h-2 mx-6 opacity-60" style={{ background: "#0d0f14" }} />
    </div>
  );
}
