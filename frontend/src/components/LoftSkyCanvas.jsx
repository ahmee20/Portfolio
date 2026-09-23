import React, { useEffect, useRef } from "react";
import { drawNightscape } from "../art/nightscape";

export function LoftSkyCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, last = 0;
    let roadOffset = 0;
    const draw = (time = 0) => drawNightscape(ctx, canvas.width, canvas.height, time / 1000, roadOffset);
    const resize = () => {
      canvas.width = Math.max(1, Math.round(canvas.clientWidth / 3));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight / 3));
      roadOffset = parseFloat(getComputedStyle(canvas).getPropertyValue("--road-offset")) * canvas.height / canvas.clientHeight;
      ctx.imageSmoothingEnabled = false;
      draw();
    };
    const animate = (time) => {
      if (time - last > 120 && !document.hidden) { draw(time); last = time; }
      frame = requestAnimationFrame(animate);
    };
    const updateMotion = () => {
      cancelAnimationFrame(frame);
      if (motion.matches) draw();
      else frame = requestAnimationFrame(animate);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    motion.addEventListener("change", updateMotion);
    resize();
    updateMotion();
    return () => { observer.disconnect(); motion.removeEventListener("change", updateMotion); cancelAnimationFrame(frame); };
  }, []);

  return <canvas ref={canvasRef} className="loft-nightscape" data-testid="loft-nightscape" aria-hidden="true" />;
}