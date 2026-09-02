import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const outputPath = resolve(process.argv[2] ?? "dist/neon-snake.svg");
const seedLabel = process.env.NEON_SEED ?? new Date().toISOString().slice(0, 10).replaceAll("-", "");

function hashSeed(value) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function randomGenerator(seed) {
  let state = seed || 0x6d2b79f5;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const random = randomGenerator(hashSeed(seedLabel));
const colors = ["#D9FF3F", "#FF2BD6", "#00F0FF", "#8B5CF6"];
const columns = Array.from({ length: 14 }, (_, index) => 72 + index * 58);
const rows = [78, 104, 130, 156, 182];
const energyNodes = [];
const colorOffset = Math.floor(random() * colors.length);

for (const [index, column] of columns.entries()) {
  const jitter = Math.round((random() - 0.5) * 18);
  energyNodes.push({
    x: column + jitter,
    y: rows[Math.floor(random() * rows.length)],
    color: colors[(index + colorOffset) % colors.length],
  });
}

const routeParts = ["M 28 130"];
let current = { x: 28, y: 130 };
let totalLength = 0;

for (const node of energyNodes) {
  const bend = { x: node.x, y: current.y };
  for (const point of [bend, node]) {
    const distance = Math.abs(point.x - current.x) + Math.abs(point.y - current.y);
    if (distance > 0) {
      routeParts.push(`L ${point.x} ${point.y}`);
      totalLength += distance;
      current = point;
    }
  }
  node.arrivalLength = totalLength;
}

const exitPoint = { x: 872, y: 130 };
routeParts.push(`L ${current.x} ${exitPoint.y}`, `L ${exitPoint.x} ${exitPoint.y}`);
totalLength += Math.abs(exitPoint.y - current.y) + Math.abs(exitPoint.x - current.x);
const route = routeParts.join(" ");

const nodeMarkup = energyNodes.map((node, index) => {
  const arrival = Math.min(0.94, Math.max(0.04, node.arrivalLength / totalLength));
  const before = Math.max(0, arrival - 0.018).toFixed(3);
  const at = arrival.toFixed(3);
  const delay = (index * 0.11).toFixed(2);
  return `
    <g class="energy" style="animation-delay:-${delay}s">
      <circle cx="${node.x}" cy="${node.y}" r="10" fill="${node.color}" opacity=".12" filter="url(#softGlow)"/>
      <circle cx="${node.x}" cy="${node.y}" r="4.5" fill="${node.color}" filter="url(#hardGlow)">
        <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;${before};${at};0.985;1" dur="18s" repeatCount="indefinite"/>
      </circle>
      <path d="M${node.x - 8} ${node.y}h16M${node.x} ${node.y - 8}v16" stroke="${node.color}" stroke-width="1" opacity=".5"/>
    </g>`;
}).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 240" role="img" aria-labelledby="title desc">
  <title id="title">Procedural neon snake daily run</title>
  <desc id="desc">A multicolor glowing snake follows a randomized route through fourteen energy nodes. The layout changes with the daily seed.</desc>
  <defs>
    <linearGradient id="frameGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#00F0FF"/><stop offset=".48" stop-color="#8B5CF6"/><stop offset="1" stop-color="#FF2BD6"/>
    </linearGradient>
    <linearGradient id="snakeGradient" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#00F0FF"/><stop offset=".34" stop-color="#8B5CF6"/><stop offset=".68" stop-color="#FF2BD6"/><stop offset="1" stop-color="#D9FF3F"/>
    </linearGradient>
    <pattern id="grid" width="29" height="26" patternUnits="userSpaceOnUse">
      <path d="M14.5 10v6M11.5 13h6" stroke="#8B5CF6" stroke-opacity=".13" stroke-width="1"/>
      <circle cx="14.5" cy="13" r="1" fill="#00F0FF" fill-opacity=".12"/>
    </pattern>
    <pattern id="scanlines" width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M0 7.5H8" stroke="#F4F1FF" stroke-opacity=".025"/>
    </pattern>
    <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="hardGlow" x="-150%" y="-150%" width="400%" height="400%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <path id="route" d="${route}" pathLength="1000"/>
  </defs>
  <style>
    .runner{stroke-dasharray:125 875;animation:run 18s linear infinite}.energy{transform-box:fill-box;transform-origin:center;animation:pulse 1.8s ease-in-out infinite}.still{display:none}
    @keyframes run{from{stroke-dashoffset:125}to{stroke-dashoffset:-875}}
    @keyframes pulse{0%,100%{transform:scale(.82)}50%{transform:scale(1.18)}}
    @media (prefers-reduced-motion:reduce){.motion{display:none}.still{display:inline}.energy{animation:none}}
  </style>
  <rect x="4" y="4" width="892" height="232" rx="14" fill="#080611" stroke="url(#frameGradient)" stroke-width="2"/>
  <rect x="18" y="55" width="864" height="148" rx="8" fill="#100B1F" stroke="#8B5CF6" stroke-opacity=".35"/>
  <rect x="18" y="55" width="864" height="148" rx="8" fill="url(#grid)"/>
  <rect x="5" y="5" width="890" height="230" rx="13" fill="url(#scanlines)"/>

  <text x="28" y="35" fill="#D9FF3F" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" font-weight="700" letter-spacing="2">NEON_SNAKE.EXE // DAILY RUN</text>
  <text x="872" y="35" text-anchor="end" fill="#B8ADD2" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11" letter-spacing="1.5">NODES:14 // SEED:${seedLabel}</text>

  <g class="motion">
    ${nodeMarkup}
    <use href="#route" fill="none" stroke="#8B5CF6" stroke-opacity=".16" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    <use class="runner" href="#route" fill="none" stroke="url(#snakeGradient)" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" filter="url(#hardGlow)"/>
  </g>
  <g class="still">
    ${nodeMarkup.replaceAll("<animate attributeName=\"opacity\" values=\"1;1;0;0;1\"", "<animate attributeName=\"opacity\" values=\"1;1;1;1;1\"")}
    <use href="#route" fill="none" stroke="url(#snakeGradient)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/>
  </g>

  <path d="M28 220h255l18-9h298l18 9h255" fill="none" stroke="#00F0FF" stroke-opacity=".45"/>
  <circle cx="301" cy="211" r="3" fill="#FF2BD6"/><circle cx="599" cy="211" r="3" fill="#D9FF3F"/>
  <text x="28" y="229" fill="#B8ADD2" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9" letter-spacing="1.2">PROCEDURAL ROUTE // ENERGY DISTRIBUTION RANDOMIZED // SIGNAL REPEATS 18S</text>
</svg>`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, svg, "utf8");
console.log(`Generated ${outputPath} with seed ${seedLabel}`);
