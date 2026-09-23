import React from "react";
import { PROFILE } from "../data/portfolio";

export function AboutContent() {
  return (
    <div data-testid="about-profile">
      <div className="pb-5">
        <h2 className="text-[22px] sm:text-[26px] font-semibold leading-tight" data-testid="about-name">Hi, I'm {PROFILE.name}</h2>
        <p className="mt-2 text-[14px] sm:text-[15px]" style={{ color: "var(--loft-muted)" }} data-testid="about-role">
          {PROFILE.role} · {PROFILE.focus.join(", ")}
        </p>
        <div className="dashed-rule mt-5" />
      </div>
      <div className="grid gap-6 sm:grid-cols-[1fr_150px] items-start pt-5">
        <div className="space-y-4 text-[15px] leading-relaxed" data-testid="about-biography">
          <p>{PROFILE.intro}</p>
          <p>{PROFILE.highlights[2]}</p>
          <p>{PROFILE.highlights[3]}</p>
        </div>
        <div className="justify-self-start sm:justify-self-end">
          <div className="card-px p-1.5 w-[150px]">
            <img src="/profile.png" alt={`Portrait of ${PROFILE.name}`} className="block w-full aspect-square object-cover" style={{ imageRendering: "auto" }} data-testid="about-portrait" />
          </div>
          <p className="font-pixel text-[7px] mt-2" style={{ color: "var(--loft-muted)" }} data-testid="about-location">{PROFILE.location}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-6" data-testid="about-specialisms">
        <span className="chip about-status-highlight" data-testid="about-availability">{PROFILE.status}</span>
        {PROFILE.focus.map((focus, index) => <span key={focus} className="chip" data-testid={`about-focus-${index}`}>{focus}</span>)}
      </div>
    </div>
  );
}