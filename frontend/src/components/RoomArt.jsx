import React from "react";

// Pixel-art room scenes drawn with crisp SVG rects. viewBox 200x150.
const R = ({ x, y, w, h, c }) => <rect x={x} y={y} width={w} height={h} fill={c} />;

function Scene({ wall, floor, children }) {
  return (
    <svg viewBox="0 0 200 150" preserveAspectRatio="none" shapeRendering="crispEdges" aria-hidden="true">
      <R x={0} y={0} w={200} h={150} c={wall} />
      <R x={0} y={122} w={200} h={28} c={floor} />
      <R x={0} y={122} w={200} h={3} c="rgba(0,0,0,0.18)" />
      {children}
    </svg>
  );
}

const INK = "#16171c";
const AMBER = "#d9962b";
const WOOD = "#6d4a34";
const WOOD_D = "#4d3323";
const LEATHER = "#5a3a2a";
const LEATHER_L = "#7a5038";
const STEEL = "#8b939f";
const STEEL_D = "#5c636e";

function LivingRoom(p) {
  return (
    <Scene {...p}>
      {/* TV */}
      <R x={120} y={28} w={62} h={38} c={INK} />
      <R x={124} y={32} w={54} h={30} c="#2b3140" />
      <R x={128} y={44} w={26} h={3} c={AMBER} />
      <R x={128} y={50} w={40} h={2} c="#5fc9b5" />
      <R x={146} y={66} w={10} h={6} c={INK} />
      <R x={120} y={72} w={62} h={4} c={WOOD_D} />
      {/* Couch */}
      <R x={18} y={78} w={90} h={12} c={LEATHER_L} />
      <R x={18} y={90} w={90} h={22} c={LEATHER} />
      <R x={12} y={84} w={10} h={30} c={LEATHER_L} />
      <R x={104} y={84} w={10} h={30} c={LEATHER_L} />
      <R x={24} y={92} w={36} h={12} c="#8a6042" />
      <R x={64} y={92} w={36} h={12} c="#8a6042" />
      <R x={16} y={114} w={6} h={8} c={WOOD_D} />
      <R x={104} y={114} w={6} h={8} c={WOOD_D} />
      {/* Rug */}
      <R x={40} y={124} w={120} h={14} c="#7d4a3a" />
      <R x={46} y={128} w={108} h={6} c="#9a5e48" />
      {/* Plant */}
      <R x={160} y={92} w={14} h={30} c="#8a5a3a" />
      <R x={154} y={72} w={26} h={22} c="#3e6b45" />
      <R x={160} y={62} w={14} h={12} c="#4e8556" />
      {/* Frame */}
      <R x={40} y={30} w={30} h={26} c={WOOD_D} />
      <R x={44} y={34} w={22} h={18} c="#b8c9d9" />
      <R x={48} y={42} w={14} h={10} c="#6f8aa6" />
    </Scene>
  );
}

function Workshop(p) {
  return (
    <Scene {...p}>
      {/* Pegboard */}
      <R x={30} y={22} w={140} h={46} c="#8a7a5c" />
      <R x={34} y={26} w={132} h={38} c="#a6956f" />
      {/* Wrench */}
      <R x={44} y={32} w={6} h={26} c={STEEL} />
      <R x={40} y={30} w={14} h={6} c={STEEL} />
      {/* Hammer */}
      <R x={70} y={30} w={6} h={28} c={WOOD} />
      <R x={62} y={30} w={22} h={8} c={STEEL_D} />
      {/* Saw */}
      <R x={98} y={34} w={36} h={8} c={STEEL} />
      <R x={134} y={32} w={12} h={12} c={WOOD} />
      {/* Screwdrivers */}
      <R x={100} y={48} w={4} h={14} c={AMBER} />
      <R x={108} y={48} w={4} h={14} c="#c0392b" />
      <R x={116} y={48} w={4} h={14} c="#2f6f8f" />
      {/* Workbench */}
      <R x={20} y={84} w={160} h={10} c={WOOD} />
      <R x={24} y={94} w={152} h={20} c={WOOD_D} />
      <R x={24} y={94} w={152} h={2} c="#3a261a" />
      <R x={28} y={114} w={8} h={8} c={WOOD_D} />
      <R x={164} y={114} w={8} h={8} c={WOOD_D} />
      {/* Vice */}
      <R x={140} y={74} w={26} h={10} c={STEEL_D} />
      <R x={146} y={70} w={14} h={6} c={STEEL} />
      {/* Toolbox */}
      <R x={34} y={70} w={36} h={14} c="#b8452f" />
      <R x={46} y={66} w={12} h={4} c={INK} />
      <R x={34} y={77} w={36} h={2} c={INK} />
      {/* Lamp */}
      <R x={96} y={60} w={4} h={24} c={INK} />
      <R x={88} y={56} w={20} h={6} c={INK} />
      <R x={90} y={62} w={16} h={3} c={AMBER} />
    </Scene>
  );
}

function Office(p) {
  return (
    <Scene {...p}>
      {/* Shelf */}
      <R x={20} y={26} w={56} h={4} c={WOOD} />
      <R x={24} y={14} w={8} h={12} c="#2f6f8f" />
      <R x={34} y={16} w={6} h={10} c={AMBER} />
      <R x={42} y={12} w={8} h={14} c="#3e6b45" />
      <R x={54} y={18} w={14} h={8} c={INK} />
      {/* Desk */}
      <R x={40} y={86} w={140} h={8} c={WOOD} />
      <R x={44} y={94} w={8} h={28} c={WOOD_D} />
      <R x={168} y={94} w={8} h={28} c={WOOD_D} />
      <R x={130} y={94} w={40} h={22} c={WOOD_D} />
      <R x={136} y={100} w={28} h={2} c={INK} />
      <R x={136} y={108} w={28} h={2} c={INK} />
      {/* Monitors */}
      <R x={60} y={46} w={48} h={34} c={INK} />
      <R x={63} y={49} w={42} h={28} c="#1e2a3a" />
      <R x={66} y={54} w={20} h={2} c="#5fc9b5" />
      <R x={66} y={60} w={30} h={2} c={AMBER} />
      <R x={66} y={66} w={24} h={2} c="#5fc9b5" />
      <R x={80} y={80} w={8} h={6} c={INK} />
      <R x={114} y={50} w={46} h={30} c={INK} />
      <R x={117} y={53} w={40} h={24} c="#1e2a3a" />
      <R x={120} y={58} w={26} h={2} c="#9aa0b2" />
      <R x={120} y={64} w={32} h={2} c="#9aa0b2" />
      <R x={120} y={70} w={18} h={2} c={AMBER} />
      <R x={134} y={80} w={8} h={6} c={INK} />
      {/* Mug */}
      <R x={164} y={76} w={10} h={10} c="#f3efe6" />
      <R x={174} y={78} w={3} h={5} c="#f3efe6" />
      {/* Chair */}
      <R x={8} y={64} w={30} h={34} c={INK} />
      <R x={11} y={67} w={24} h={26} c="#2b2f3a" />
      <R x={6} y={98} w={34} h={6} c={INK} />
      <R x={20} y={104} w={6} h={12} c={INK} />
      <R x={8} y={116} w={30} h={4} c={INK} />
    </Scene>
  );
}

function Gym(p) {
  return (
    <Scene {...p}>
      {/* Rack */}
      <R x={24} y={30} w={6} h={92} c={STEEL_D} />
      <R x={110} y={30} w={6} h={92} c={STEEL_D} />
      <R x={24} y={30} w={92} h={6} c={STEEL_D} />
      {/* Barbell */}
      <R x={10} y={54} w={120} h={5} c={STEEL} />
      <R x={14} y={46} w={10} h={21} c={INK} />
      <R x={26} y={48} w={8} h={17} c={INK} />
      <R x={106} y={48} w={8} h={17} c={INK} />
      <R x={116} y={46} w={10} h={21} c={INK} />
      {/* Dumbbell shelf */}
      <R x={130} y={70} w={60} h={4} c={WOOD} />
      <R x={134} y={60} w={8} h={10} c={INK} />
      <R x={142} y={63} w={6} h={4} c={STEEL} />
      <R x={148} y={60} w={8} h={10} c={INK} />
      <R x={162} y={58} w={10} h={12} c={INK} />
      <R x={172} y={62} w={6} h={4} c={STEEL} />
      <R x={178} y={58} w={10} h={12} c={INK} />
      <R x={130} y={100} w={60} h={4} c={WOOD} />
      <R x={136} y={88} w={12} h={12} c={INK} />
      <R x={148} y={92} w={6} h={4} c={STEEL} />
      <R x={154} y={88} w={12} h={12} c={INK} />
      {/* Kettlebell */}
      <R x={40} y={100} w={22} h={22} c={INK} />
      <R x={46} y={92} w={10} h={8} c={INK} />
      <R x={49} y={95} w={4} h={3} c={p.wall} />
      {/* Mat */}
      <R x={70} y={112} w={50} h={10} c="#2f6f8f" />
      {/* Clock */}
      <R x={150} y={22} w={22} h={22} c="#f3efe6" />
      <R x={148} y={20} w={26} h={2} c={INK} />
      <R x={148} y={44} w={26} h={2} c={INK} />
      <R x={148} y={20} w={2} h={26} c={INK} />
      <R x={172} y={20} w={2} h={26} c={INK} />
      <R x={160} y={26} w={2} h={8} c={INK} />
      <R x={160} y={32} w={6} h={2} c={INK} />
    </Scene>
  );
}

function Study(p) {
  const books = [
    "#7d4a3a", "#2f6f8f", AMBER, "#3e6b45", "#5c636e", "#b8452f", "#2f6f8f", "#6d4a34", "#3e6b45", AMBER,
  ];
  return (
    <Scene {...p}>
      <R x={20} y={20} w={110} h={100} c={WOOD_D} />
      <R x={26} y={26} w={98} h={26} c="#3a261a" />
      <R x={26} y={58} w={98} h={26} c="#3a261a" />
      <R x={26} y={90} w={98} h={26} c="#3a261a" />
      {books.map((c, i) => (
        <R key={`a${i}`} x={28 + i * 9} y={30 + (i % 3)} w={7} h={22 - (i % 3)} c={c} />
      ))}
      {books.slice(0, 8).map((c, i) => (
        <R key={`b${i}`} x={28 + i * 9} y={62 + (i % 2)} w={7} h={22 - (i % 2)} c={books[(i + 3) % 10]} />
      ))}
      <R x={104} y={64} w={18} h={20} c="#8a7a5c" />
      {books.slice(0, 6).map((c, i) => (
        <R key={`c${i}`} x={28 + i * 9} y={94} w={7} h={22} c={books[(i + 6) % 10]} />
      ))}
      <R x={92} y={100} w={28} h={16} c={INK} />
      <R x={96} y={104} w={20} h={8} c="#5fc9b5" />
      {/* Globe */}
      <R x={150} y={70} w={30} h={30} c="#2f6f8f" />
      <R x={156} y={74} w={10} h={8} c="#3e6b45" />
      <R x={168} y={84} w={8} h={10} c="#3e6b45" />
      <R x={162} y={100} w={6} h={14} c={INK} />
      <R x={154} y={114} w={22} h={4} c={INK} />
      {/* Lamp */}
      <R x={160} y={22} w={4} h={40} c={INK} />
      <R x={150} y={18} w={24} h={6} c={AMBER} />
    </Scene>
  );
}

function Trophy({ x, y, c = AMBER }) {
  return (
    <>
      <R x={x} y={y} w={16} h={12} c={c} />
      <R x={x - 3} y={y + 2} w={3} h={6} c={c} />
      <R x={x + 16} y={y + 2} w={3} h={6} c={c} />
      <R x={x + 6} y={y + 12} w={4} h={6} c={c} />
      <R x={x + 2} y={y + 18} w={12} h={4} c={INK} />
    </>
  );
}

function TrophyWall(p) {
  return (
    <Scene {...p}>
      <R x={20} y={56} w={100} h={4} c={WOOD} />
      <R x={20} y={96} w={100} h={4} c={WOOD} />
      <Trophy x={30} y={32} />
      <Trophy x={62} y={32} c="#b9b9b9" />
      <Trophy x={94} y={32} c="#b87a1c" />
      <Trophy x={46} y={72} />
      <Trophy x={78} y={72} />
      {/* Medal */}
      <R x={140} y={26} w={4} h={20} c="#b8452f" />
      <R x={150} y={26} w={4} h={20} c="#2f6f8f" />
      <R x={138} y={44} w={18} h={18} c={AMBER} />
      <R x={144} y={50} w={6} h={6} c={INK} />
      {/* Frames */}
      <R x={132} y={74} w={48} h={36} c={WOOD_D} />
      <R x={136} y={78} w={40} h={28} c="#f3efe6" />
      <R x={140} y={84} w={26} h={2} c={INK} />
      <R x={140} y={90} w={32} h={2} c={INK} />
      <R x={140} y={96} w={20} h={2} c={INK} />
      <R x={164} y={96} w={8} h={6} c={AMBER} />
      {/* Podium */}
      <R x={30} y={110} w={80} h={12} c={WOOD_D} />
    </Scene>
  );
}

function Garage(p) {
  return (
    <Scene {...p}>
      {/* Garage door */}
      <R x={20} y={16} w={160} h={44} c="#9ba1ab" />
      <R x={20} y={26} w={160} h={2} c="#6e747e" />
      <R x={20} y={38} w={160} h={2} c="#6e747e" />
      <R x={20} y={50} w={160} h={2} c="#6e747e" />
      {/* Car */}
      <R x={44} y={82} w={112} h={22} c="#2c4a3e" />
      <R x={64} y={66} w={70} h={18} c="#2c4a3e" />
      <R x={70} y={70} w={26} h={12} c="#b8c9d9" />
      <R x={102} y={70} w={26} h={12} c="#b8c9d9" />
      <R x={44} y={92} w={112} h={4} c="#1f3830" />
      <R x={148} y={86} w={8} h={6} c={AMBER} />
      <R x={44} y={86} w={6} h={6} c="#b8452f" />
      <R x={56} y={100} w={20} h={20} c={INK} />
      <R x={62} y={106} w={8} h={8} c={STEEL} />
      <R x={124} y={100} w={20} h={20} c={INK} />
      <R x={130} y={106} w={8} h={8} c={STEEL} />
      {/* Tool chest */}
      <R x={164} y={90} w={26} h={32} c="#b8452f" />
      <R x={168} y={96} w={18} h={2} c={INK} />
      <R x={168} y={104} w={18} h={2} c={INK} />
      <R x={168} y={112} w={18} h={2} c={INK} />
      {/* Tire */}
      <R x={12} y={100} w={22} h={22} c={INK} />
      <R x={19} y={107} w={8} h={8} c={STEEL_D} />
    </Scene>
  );
}

function Rooftop(p) {
  return (
    <Scene {...p}>
      {/* Skyline */}
      <R x={10} y={40} w={24} h={50} c="#7d8ea6" />
      <R x={40} y={26} w={18} h={64} c="#6f819a" />
      <R x={64} y={48} w={30} h={42} c="#7d8ea6" />
      <R x={150} y={30} w={20} h={60} c="#6f819a" />
      <R x={176} y={50} w={16} h={40} c="#7d8ea6" />
      <R x={14} y={46} w={4} h={4} c={AMBER} />
      <R x={46} y={34} w={4} h={4} c={AMBER} />
      <R x={156} y={40} w={4} h={4} c={AMBER} />
      <R x={72} y={56} w={4} h={4} c={AMBER} />
      {/* Parapet */}
      <R x={0} y={88} w={200} h={8} c="#5c636e" />
      <R x={0} y={96} w={200} h={26} c="#6e747e" />
      {/* Antenna */}
      <R x={120} y={30} w={3} h={58} c={INK} />
      <R x={110} y={36} w={23} h={2} c={INK} />
      <R x={114} y={44} w={15} h={2} c={INK} />
      {/* Table with laptop */}
      <R x={70} y={106} w={60} h={4} c={WOOD} />
      <R x={74} y={110} w={4} h={12} c={WOOD_D} />
      <R x={122} y={110} w={4} h={12} c={WOOD_D} />
      <R x={84} y={90} w={30} h={16} c={INK} />
      <R x={87} y={93} w={24} h={11} c="#1e2a3a" />
      <R x={90} y={97} w={14} h={2} c="#5fc9b5" />
      <R x={80} y={104} w={38} h={3} c="#2b2f3a" />
      {/* Mailbox */}
      <R x={24} y={98} w={24} h={16} c="#2f6f8f" />
      <R x={24} y={104} w={24} h={2} c={INK} />
      <R x={34} y={114} w={4} h={8} c={INK} />
      <R x={44} y={96} w={6} h={4} c="#b8452f" />
      {/* Envelope */}
      <R x={148} y={100} w={26} h={18} c="#f3efe6" />
      <R x={148} y={100} w={26} h={2} c={INK} />
      <R x={150} y={102} w={22} h={2} c={INK} />
      <R x={158} y={104} w={6} h={4} c={INK} />
      {/* Chair */}
      <R x={140} y={108} w={6} h={14} c={INK} />
      <R x={140} y={104} w={20} h={4} c={INK} />
    </Scene>
  );
}

const SCENES = {
  about: LivingRoom,
  projects: Workshop,
  experience: Office,
  skills: Gym,
  education: Study,
  achievements: TrophyWall,
  resume: Garage,
  contact: Rooftop,
};

export default function RoomArt({ room }) {
  const Comp = SCENES[room.id] || LivingRoom;
  return <Comp wall={room.wall} floor={room.floor} />;
}
