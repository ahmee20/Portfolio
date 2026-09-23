import React from "react";
import { Pause, Play, SkipBack, SkipForward, Volume1, Volume2, VolumeX } from "lucide-react";

export function Disc({ playing, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={`disc ${playing ? "playing" : ""}`} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#0c0d11" stroke="#687368" strokeWidth="2" />
      <circle cx="20" cy="20" r="14" fill="none" stroke="#343936" />
      <circle cx="20" cy="20" r="10" fill="none" stroke="#343936" />
      <circle cx="20" cy="20" r="7" fill="#eaa095" />
      <rect x="19" y="14" width="2" height="3" fill="#16171c" />
      <circle cx="20" cy="20" r="1.6" fill="#16171c" />
    </svg>
  );
}

export default function MusicPlayer({ player }) {
  const { song, playing, progress, seek, toggle, prev, next, volume, setVolume } = player;
  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;
  return (
    <section className="music-receiver" aria-label="Music player" data-testid="music-player">
      <div className="receiver-track">
        <Disc playing={playing} />
        <div className="receiver-track-info">
          <p className="font-pixel" title={song.title} data-testid="music-title">{song.title}</p>
          <p data-testid="music-artist">{song.artist}</p>
        </div>
      </div>
      <input type="range" className="music-range music-seek" min="0" max="1000" step="1" value={Math.round(progress * 1000)} onChange={(event) => seek(Number(event.target.value) / 1000)} aria-label="Song position" aria-valuetext={`${Math.round(progress * 100)} percent`} data-testid="music-seek" style={{ "--range-fill": `${progress * 100}%` }} />
      <div className="receiver-controls">
        <button type="button" className="receiver-button" onClick={prev} aria-label="Previous song" title="Previous song" data-testid="music-prev"><SkipBack size={15} /></button>
        <button type="button" className="receiver-button receiver-play" onClick={toggle} aria-label={playing ? "Pause" : "Play"} title={playing ? "Pause music" : "Play music"} data-testid="music-toggle">{playing ? <Pause size={15} /> : <Play size={15} />}</button>
        <button type="button" className="receiver-button" onClick={next} aria-label="Next song" title="Next song" data-testid="music-next"><SkipForward size={15} /></button>
        <span className="receiver-divider" aria-hidden="true" />
        <button type="button" className="receiver-button receiver-volume" onClick={() => setVolume(volume === 0 ? 0.1 : 0)} aria-label={volume === 0 ? "Unmute music" : "Mute music"} title={volume === 0 ? "Unmute music" : "Mute music"} data-testid="music-mute"><VolumeIcon size={15} /></button>
        <input type="range" className="music-range receiver-volume-range" min="0" max="100" step="1" value={Math.round(volume * 100)} onChange={(event) => setVolume(Number(event.target.value) / 100)} aria-label="Volume" aria-valuetext={`${Math.round(volume * 100)} percent`} title={`Volume ${Math.round(volume * 100)}%`} data-testid="music-volume" style={{ "--range-fill": `${volume * 100}%` }} />
      </div>
    </section>
  );
}