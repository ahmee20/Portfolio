const SKY = ["#172730", "#243a43", "#3c5053", "#626663", "#8c7870"];
const random = (n) => { const r = Math.sin(n * 127.1 + 311.7) * 43758.5453; return r - Math.floor(r); };

function ridge(ctx, w, h, base, amplitude, color, seed) {
  ctx.fillStyle = color;
  for (let x = 0; x < w; x += 3) {
    const wave = Math.sin(x / 47 + seed) * 0.5 + Math.sin(x / 21 + seed) * 0.2;
    const y = Math.floor(h * base + wave * amplitude);
    ctx.fillRect(x, y, 3, h - y);
  }
}

function city(ctx, w, h, base, color, seed, size) {
  const ground = Math.floor(h * base);
  for (let x = 0, i = 0; x < w; i++) {
    const width = Math.floor(9 + random(i + seed) * 15) * size;
    const height = Math.floor(8 + random(i + seed + 70) * 24) * size;
    const y = ground - height;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, h - y);
    ctx.fillRect(x - 1, y, width + 2, 2);
    if (i % 3 === 0) {
      ctx.fillRect(x + 4, y - 5, width - 8, 5);
      ctx.fillRect(x + 7, y - 10, 1, 5);
    }
    for (let row = 0; row < height - 6; row += 7) {
      for (let col = 3; col < width - 3; col += 6) {
        ctx.fillStyle = random(i * 57 + row + col) > 0.65 ? "#b59b68" : "#385357";
        ctx.fillRect(x + col, y + 5 + row, 2, 3);
      }
    }
    x += width + 3;
  }
}

function cloud(ctx, x, y, width, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x + 9, y, width - 21, 3);
  ctx.fillRect(x + 4, y + 3, width - 6, 3);
  ctx.fillRect(x, y + 6, width, 2);
}

export function drawNightscape(ctx, w, h, time, roadOffset) {
  // Five deliberately dithered sky bands rather than a smooth UI gradient.
  SKY.forEach((color, i) => {
    ctx.fillStyle = color;
    const y = Math.floor(h * i * 0.16);
    ctx.fillRect(0, y, w, Math.ceil(h * 0.17));
    if (i) for (let x = 0; x < w; x += 4) ctx.fillRect(x, y - 1 - (x % 3), 1, 2);
  });
  for (let i = 0; i < w / 9; i++) {
    ctx.fillStyle = i % 4 ? "#869b97" : "#dbceac";
    ctx.fillRect(Math.floor(random(i) * w), Math.floor(random(i + 84) * h * 0.39), 1, 1);
  }
  // A hard-edged crescent, no bloom or glow.
  const mx = Math.floor(w * 0.83), my = Math.floor(h * 0.12);
  ctx.fillStyle = "#e7dbc0";
  ctx.fillRect(mx + 3, my, 7, 2); ctx.fillRect(mx, my + 2, 12, 9);
  ctx.fillRect(mx + 2, my + 11, 8, 2);
  ctx.fillStyle = SKY[0];
  ctx.fillRect(mx + 5, my - 1, 8, 10); ctx.fillRect(mx + 8, my + 9, 6, 2);
  const travel = (start, speed, width) => {
    const span = w + width * 2;
    return Math.floor(((start + time * speed + width) % span + span) % span - width);
  };
  cloud(ctx, travel(w * 0.08, 5, 65), Math.floor(h * 0.19), 65, "#425259");
  cloud(ctx, travel(w * 0.62, -3.5, 90), Math.floor(h * 0.27), 90, "#576064");
  ridge(ctx, w, h, 0.53, h * 0.17, "#405b5c", 1);
  ridge(ctx, w, h, 0.63, h * 0.12, "#304b4f", 4);
  city(ctx, w, h, 0.82, "#2a4146", 17, 0.8);
  city(ctx, w, h, 0.93, "#1b3036", 59, 1);
  // The road and dock use the same CSS-defined baseline at every screen size.
  const terrace = Math.round(h - roadOffset);
  ctx.fillStyle = "#1d292d"; ctx.fillRect(0, terrace, w, h - terrace);
  [w * 0.045, w * 0.925].forEach((x) => {
    ctx.fillStyle = "#314e42";
    ctx.fillRect(x + 4, terrace - 21, 3, 13); ctx.fillRect(x - 2, terrace - 16, 14, 4);
    ctx.fillRect(x, terrace - 20, 3, 5); ctx.fillRect(x + 10, terrace - 23, 3, 9);
    ctx.fillStyle = "#885a4c"; ctx.fillRect(x, terrace - 8, 12, 3);
    ctx.fillStyle = "#65453e"; ctx.fillRect(x + 2, terrace - 5, 8, 5);
  });
  // A rooftop aerial, and slack wires framing the scene rather than the house.
  if (w > 250) {
    ctx.fillStyle = "#182a30";
    const px = Math.floor(w * 0.07), top = Math.floor(h * 0.37);
    ctx.fillRect(px, top, 2, terrace - top); ctx.fillRect(px - 7, top + 9, 16, 2);
    for (let x = 0; x < px; x++) ctx.fillRect(x, top + 16 + Math.floor(Math.sin(x / px * Math.PI) * 6), 1, 1);
  }
}