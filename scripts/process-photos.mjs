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

async function process(input, output, { width, height, quality = 84 } = {}) {
  let img = sharp(`${SRC}/${input}`).rotate(); // rotate() auto-applies EXIF orientation
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
