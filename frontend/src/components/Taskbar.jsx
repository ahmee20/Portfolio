import React, { useEffect, useState } from "react";
import { LayoutGrid, AudioLines, VolumeX } from "lucide-react";
import { ROOMS } from "../data/portfolio";
import MusicPlayer from "./MusicPlayer";
import Guide from "./Guide";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(t);
  }, []);
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now
    .toLocaleDateString([], { weekday: "short", day: "2-digit", month: "short" })
    .toUpperCase();
  return { time, date };
}

export default function Taskbar({ open, minimized, onOpen, onRestore, player, sounds, guideMessage, guideHidden }) {
  const { time, date } = useClock();
  const openRoom = ROOMS.find((r) => r.id === open);

  return (
    <footer className="taskbar" data-testid="taskbar">
      <div className="rooms-island" data-testid="rooms-island">
        <div className="rooms-island-actions">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className="task-btn primary" data-testid="rooms-menu-trigger">
            <LayoutGrid size={14} aria-hidden="true" />
            Rooms
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          align="start"
          sideOffset={10}
          className="rounded-none border-2 border-[#16171c] bg-[#f3efe6] p-1 min-w-[220px]"
          data-testid="rooms-menu"
        >
          {ROOMS.map((room) => (
            <DropdownMenuItem
              key={room.id}
              onSelect={() => onOpen(room.id)}
              className="rounded-none font-pixel text-[8px] uppercase tracking-wider px-3 py-2.5 cursor-pointer focus:bg-[#2c4a3e] focus:text-[#f3efe6]"
              data-testid={`menu-room-${room.id}`}
            >
              <span className="flex-1">{room.label}</span>
              <span className="opacity-60 ml-4">{room.place}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {openRoom && (
        <button
          type="button"
          className={`task-btn tab ${minimized ? "minimized" : ""} window-return`}
          onClick={onRestore}
          data-testid="taskbar-window-tab"
        >
          {openRoom.label}
        </button>
      )}

      <button type="button" className="icon-btn room-sound-toggle" onClick={sounds.toggle} disabled={!sounds.available} aria-label={sounds.enabled ? "Mute room sounds" : "Enable room sounds"} aria-pressed={sounds.enabled} title={!sounds.available ? "Room sounds unavailable in this browser" : sounds.enabled ? "Mute room sounds" : "Enable room sounds"} data-testid="room-sound-toggle">
        {sounds.enabled ? <AudioLines size={14} /> : <VolumeX size={14} />}
      </button>
        </div>
      </div>
      <div className="dock-clock" data-testid="taskbar-clock">
        <p className="font-pixel text-[9px]" style={{ color: "#f3efe6" }} data-testid="dock-time">
          {time}
        </p>
        <p className="font-pixel text-[7px]" style={{ color: "#afbab9" }} data-testid="dock-date">
          {date}
        </p>
      </div>
      <div className="music-island" data-testid="music-island">
        <Guide message={guideMessage} hidden={guideHidden} />
        <MusicPlayer player={player} />
      </div>
    </footer>
  );
}
