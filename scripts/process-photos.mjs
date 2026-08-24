// One-off processing pass for the real clinic photos dropped into src/assets.
// Deliberately conservative: crop to the slot's aspect ratio, normalize
// exposure/contrast a touch, sharpen slightly for the softer phone shots.
// No tint/hue shifting — skin and gum tones are hue-sensitive, and a global
// color cast is exactly what reads as "AI-edited" rather than photographed.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "src/assets/raw";
const OUT = "src/assets/site";

await mkdir(OUT, { recursive: true });

async function process(input, output, { width, height, quality = 84, extract } = {}) {
  let img = sharp(`${SRC}/${input}`).rotate(); // rotate() auto-applies EXIF orientation
  if (extract) img = img.extract(extract);
  if (width && height) {
    img = img.resize(width, height, { fit: "cover", position: "attention" });
  } else if (width) {
    img = img.resize({ width });
  }
  img = img.normalize({ lower: 1, upper: 99 }).sharpen({ sigma: 0.6 });
  await img.jpeg({ quality, mozjpeg: true }).toFile(`${OUT}/${output}`);
  console.log(`${input} -> site/${output}`);
}

// Portrait for the home "Identidade" slot (was a square headshot; crop to 3:4).
await process("Regina1.jpg", "regina-portrait.jpg", { width: 900, height: 1200 });

// Clinic entrance/hallway — already native 3:4, just resized for the web.
await process("consultorio.jpg", "consultorio-entrada.jpg", { width: 900, height: 1200 });

// Portrait for the "A Profissional" bio slot on the sobre page — crop to just
// her face/shoulders (the rest of the source photo is a patient poster behind
// her that competes for attention in a professional bio shot). The extract
// box already matches the 4:5 target ratio so the resize below doesn't need
// to auto-crop (and potentially drift back toward the poster) on top of it.
await process("consultorio2.jpg", "regina-bio.jpg", {
  extract: { left: 15, top: 130, width: 258, height: 322 },
  width: 700,
  height: 875,
});

// Before/after results — uniform square crop for a clean grid.
const results = [
  ["antes_depois.jpg", "resultado-1.jpg"],
  ["antes_depois3.jpg", "resultado-2.jpg"],
  ["antes_depois7.jpg", "resultado-3.jpg"],
  ["antes_depois9.jpg", "resultado-4.jpg"],
];
for (const [input, output] of results) {
  await process(input, output, { width: 900, height: 900 });
}
