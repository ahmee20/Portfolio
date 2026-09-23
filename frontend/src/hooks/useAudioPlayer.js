import { useCallback, useEffect, useRef, useState } from "react";
import { SONGS } from "../data/portfolio";

const DEFAULT_VOLUME = 0.1;

export function useAudioPlayer() {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolumeState] = useState(DEFAULT_VOLUME);
  const [progress, setProgress] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const wantPlayRef = useRef(true);

  // Create the audio element once
  useEffect(() => {
    const audio = new Audio(SONGS[0].src);
    audio.preload = "auto";
    audio.volume = DEFAULT_VOLUME;
    audioRef.current = audio;

    const onTime = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setIndex((i) => (i + 1) % SONGS.length);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    // Try to autoplay immediately on load
    const tryPlay = () =>
      audio
        .play()
        .then(() => setBlocked(false))
        .catch(() => setBlocked(true));
    tryPlay();

    // If the browser blocks autoplay, start on the very first user gesture
    const unlock = () => {
      if (wantPlayRef.current && audio.paused) {
        audio.play().then(() => setBlocked(false)).catch(() => {});
      }
      remove();
    };
    const events = ["pointerdown", "keydown", "touchstart"];
    const remove = () => events.forEach((e) => window.removeEventListener(e, unlock));
    events.forEach((e) => window.addEventListener(e, unlock, { passive: true }));

    return () => {
      remove();
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, []);

  // Switch track when index changes
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = SONGS[index].src;
    audio.load();
    setProgress(0);
    if (wantPlayRef.current) {
      audio.play().catch(() => setBlocked(true));
    }
  }, [index]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      wantPlayRef.current = true;
      audio.play().then(() => setBlocked(false)).catch(() => {});
    } else {
      wantPlayRef.current = false;
      audio.pause();
    }
  }, []);

  const next = useCallback(() => {
    wantPlayRef.current = true;
    setIndex((i) => (i + 1) % SONGS.length);
  }, []);

  const prev = useCallback(() => {
    wantPlayRef.current = true;
    setIndex((i) => (i - 1 + SONGS.length) % SONGS.length);
  }, []);

  const setVolume = useCallback((v) => {
    const clamped = Math.min(1, Math.max(0, v));
    setVolumeState(clamped);
    if (audioRef.current) audioRef.current.volume = clamped;
  }, []);

  const seek = useCallback((ratio) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    audio.currentTime = Math.min(1, Math.max(0, ratio)) * audio.duration;
  }, []);

  return {
    song: SONGS[index],
    index,
    playing,
    volume,
    progress,
    blocked,
    toggle,
    next,
    prev,
    setVolume,
    seek,
  };
}
