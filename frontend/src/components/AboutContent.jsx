import React from "react";
import { PROFILE } from "../data/portfolio";

export function AboutContent() {
  return (
    <div data-testid="about-profile">
      <div className="pb-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-[22px] sm:text-[26px] font-semibold leading-tight" data-testid="about-name">Hi, I'm {PROFILE.name}</h2>
          <span className="font-pixel text-[7px]" style={{ color: "var(--loft-muted)" }} data-testid="about-location">{PROFILE.location}</span>
        </div>
        <p className="mt-2 text-[14px] sm:text-[15px]" style={{ color: "var(--loft-muted)" }} data-testid="about-role">
          {PROFILE.role} · {PROFILE.focus.join(", ")}
        </p>
        <div className="dashed-rule mt-5" />
      </div>
      <div className="space-y-4 text-[15px] leading-relaxed pt-5" data-testid="about-biography">
        <p>{PROFILE.intro}</p>
        <p>{PROFILE.highlights[2]}</p>
        <p>{PROFILE.highlights[3]}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6" data-testid="about-specialisms">
        <span className="chip about-status-highlight" data-testid="about-availability">{PROFILE.status}</span>
        {PROFILE.focus.map((focus, index) => <span key={focus} className="chip" data-testid={`about-focus-${index}`}>{focus}</span>)}
      </div>
    </div>
  );
}