import { useCallback, useEffect, useRef, useState } from "react";
import { roomClick, roomDoor } from "../audio/roomSounds";

const SOUND_LEVEL = 0.55;

export function useRoomSounds() {
  const [enabled, setEnabled] = useState(true);
  const [available, setAvailable] = useState(true);
  const engine = useRef(null);
  const enabledRef = useRef(true);
  const lastHover = useRef(0);

  const unlock = useCallback(() => {
    try {
      if (!engine.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) { setAvailable(false); return null; }
        const ctx = new AudioContext();
        const output = ctx.createGain();
        output.gain.value = enabledRef.current ? SOUND_LEVEL : 0;
        output.connect(ctx.destination);
        engine.current = { ctx, output };
      }
      const { ctx } = engine.current;
      if (ctx.state !== "running" && ctx.state !== "closed") ctx.resume().catch(() => {});
      return engine.current;
    } catch {
      setAvailable(false);
      return null;
    }
  }, []);

  const hover = useCallback((id) => {
    const audio = engine.current;
    const now = performance.now();
    if (!enabledRef.current || !audio || audio.ctx.state !== "running" || now - lastHover.current < 100) return;
    lastHover.current = now;
    roomClick(audio.ctx, audio.output, id);
  }, []);

  const door = useCallback((id, closing = false) => {
    if (!enabledRef.current) return;
    const audio = unlock();
    if (!audio) return;
    const play = () => {
      if (enabledRef.current && audio.ctx.state === "running") roomDoor(audio.ctx, audio.output, id, closing);
    };
    // Safari can suspend/interupt Web Audio while music or device audio changes.
    // Resume inside the gesture, then schedule the latch only after audio is running.
    if (audio.ctx.state === "running") play();
    else audio.ctx.resume().then(play).catch(() => setAvailable(false));
  }, [unlock]);

  const toggle = useCallback(() => {
    const next = !enabledRef.current;
    enabledRef.current = next;
    setEnabled(next);
    const audio = unlock();
    if (audio) audio.output.gain.setTargetAtTime(next ? SOUND_LEVEL : 0, audio.ctx.currentTime, 0.01);
  }, [unlock]);

  useEffect(() => () => {
    if (engine.current) {
      engine.current.ctx.close().catch(() => {});
      engine.current = null;
    }
  }, []);

  return { enabled, available, unlock, hover, door, toggle };
}