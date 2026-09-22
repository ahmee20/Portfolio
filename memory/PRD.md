# Loft OS – Ahmad Mehmood Portfolio (frontend-only)

## Goal
Re-skin the existing portfolio (github.com/ahmee20/ahmad-mehmood-portfolio) with a pixel-art "walk-around house" UI
(inspired by the Dollhouse OS reference) in a masculine loft theme. Content unchanged. Single-screen (non-scrollable) on desktop; scroll allowed on mobile.

## Built
- Boot screen "LOFT OS" (Enter / Unlock the door) -> house with 8 pixel-art rooms:
  About (Living Room), Projects (Workshop), Experience (Office), Skills (Gym), Education (Study),
  Achievements (Trophy Wall), Resume (Garage), Contact (Rooftop).
- Each room opens an OS-style window (minimize/maximize/close, Esc). Projects window has type filters.
- Taskbar: Rooms menu (shadcn dropdown), open-window tab, music player, clock.
- Music player: 4 songs from repo (public/music), spinning disc, play/pause/prev/next, volume slider,
  default Self Control @ 10%, autoplay attempted on load with first-gesture fallback (browser policy).
- Pixel-man guide with contextual speech bubble.
- Content lives in src/data/portfolio.js (ported verbatim). No backend used.

## Constraints from user
- No decorative bullet points, no glowing effects. Content must not change.
