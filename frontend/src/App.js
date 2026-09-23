import React, { useCallback, useState } from "react";
import "@/loft.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootScreen from "@/components/BootScreen";
import House from "@/components/House";
import RoomWindow from "@/components/RoomWindow";
import Taskbar from "@/components/Taskbar";
import { PROFILE, ROOMS } from "@/data/portfolio";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { useRoomSounds } from "@/hooks/useRoomSounds";
import { LoftSkyCanvas } from "@/components/LoftSkyCanvas";

const WELCOME = `Welcome in! I'm ${PROFILE.short}. Click any room and I'll show you around.`;

function Loft({ player, sounds }) {
  const [open, setOpen] = useState(null);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [hover, setHover] = useState(null);
  const { door, hover: playHover } = sounds;

  const openRoom = useCallback((id) => {
    door(id);
    setOpen(id);
    setMinimized(false);
  }, [door]);
  const closeRoom = useCallback(() => {
    door(open, true);
    setOpen(null);
    setMinimized(false);
    setMaximized(false);
  }, [door, open]);
  const hoverRoom = useCallback((id) => {
    setHover(id);
    if (id) playHover(id);
  }, [playHover]);

  const hoveredRoom = ROOMS.find((r) => r.id === hover);
  const activeRoom = ROOMS.find((r) => r.id === open);
  const message = hoveredRoom
    ? hoveredRoom.guide
    : activeRoom && !minimized
      ? activeRoom.guide
      : WELCOME;

  return (
    <div className="loft-root fade-in" data-testid="loft-root">
      <LoftSkyCanvas />
      <div className="loft-road" data-testid="loft-road" aria-hidden="true" />
      <main className="loft-stage flex items-center justify-center py-3 sm:py-5">
        <House onOpen={openRoom} onHover={hoverRoom} active={open} />
        {open && !minimized && (
          <RoomWindow
            roomId={open}
            maximized={maximized}
            onClose={closeRoom}
            onMinimize={() => setMinimized(true)}
            onToggleMax={() => setMaximized((m) => !m)}
          />
        )}
      </main>
      <Taskbar
        open={open}
        minimized={minimized}
        onOpen={openRoom}
        onRestore={() => setMinimized((m) => !m)}
        player={player}
        sounds={sounds}
        guideMessage={message}
        guideHidden={Boolean(open && !minimized)}
      />
    </div>
  );
}

function Home() {
  const [booted, setBooted] = useState(false);
  const player = useAudioPlayer();
  const sounds = useRoomSounds();
  const { unlock } = sounds;
  const enter = useCallback(() => { unlock(); setBooted(true); }, [unlock]);
  if (!booted) return <BootScreen onEnter={enter} />;
  return <Loft player={player} sounds={sounds} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
