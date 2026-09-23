// Quiet, tactile foley made locally with Web Audio, not downloaded samples.
const MATERIALS = {
  about: 1, projects: 0.78, experience: 1.12, skills: 0.65,
  education: 0.92, achievements: 1.28, resume: 0.56, contact: 1.42,
};

function tone(ctx, output, at, frequency, end, duration, volume) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, at);
  oscillator.frequency.exponentialRampToValueAtTime(end, at + duration);
  gain.gain.setValueAtTime(0, at);
  gain.gain.linearRampToValueAtTime(volume, at + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
  oscillator.connect(gain).connect(output);
  oscillator.start(at);
  oscillator.stop(at + duration + 0.02);
  oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
}

function friction(ctx, output, at, duration, frequency, volume) {
  const source = ctx.createBufferSource();
  const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * duration), ctx.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
  source.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 2.5;
  filter.frequency.setValueAtTime(frequency, at);
  filter.frequency.exponentialRampToValueAtTime(frequency * 0.45, at + duration);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, at);
  gain.gain.linearRampToValueAtTime(volume, at + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
  source.connect(filter).connect(gain).connect(output);
  source.start(at);
  source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
}

export function roomClick(ctx, output, room) {
  const pitch = MATERIALS[room] || 1;
  friction(ctx, output, ctx.currentTime, 0.045, 1300 * pitch, 0.32);
}

export function roomDoor(ctx, output, room, closing = false) {
  const pitch = MATERIALS[room] || 1;
  const at = ctx.currentTime;
  // Latch, a little hinge friction, then the hollow wooden resonance.
  friction(ctx, output, at, 0.06, 1600 * pitch, 0.55);
  if (!closing) friction(ctx, output, at + 0.045, 0.28, 540 * pitch, 0.32);
  tone(ctx, output, at + (closing ? 0.03 : 0.11), 155 * pitch, 63 * pitch, 0.26, 0.32);
}