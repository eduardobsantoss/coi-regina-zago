// The logo files are flat-color JPEG exports (solid background, no photo
// noise), so a simple distance-based color key gives a clean cutout without
// needing a real background-removal model.
import sharp from "sharp";

async function keyOut(input, output, { tolerance = 18, feather = 22 } = {}) {
  const img = sharp(input);
  const { data, info } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const [bgR, bgG, bgB] = [data[0], data[1], data[2]];

  for (let i = 0; i < data.length; i += channels) {
    const dr = data[i] - bgR;
    const dg = data[i + 1] - bgG;
    const db = data[i + 2] - bgB;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);
    let alpha;
    if (dist <= tolerance) alpha = 0;
    else if (dist >= tolerance + feather) alpha = 255;
    else alpha = Math.round(((dist - tolerance) / feather) * 255);
    data[i + 3] = alpha;
  }

  const rawOpts = { raw: { width, height, channels } };
  const markHeight = Math.round(height * 0.58);

  await sharp(Buffer.from(data), rawOpts).png().trim({ threshold: 10 }).toFile(output);
  console.log(`${input} -> ${output}`);

  // The icon mark sits in the top ~58% of the lockup, above the "COI ..." wordmark.
  // (chaining .trim() straight after .extract() on a raw-built image trips a sharp/libvips
  // bug — "bad extract area" — so materialize the crop first, then trim as a separate pass)
  const markOnly = output.replace(".png", "-mark.png");
  const cropped = await sharp(Buffer.from(data), rawOpts)
    .extract({ left: 0, top: 0, width, height: markHeight })
    .png()
    .toBuffer();
  await sharp(cropped).trim({ threshold: 10 }).toFile(markOnly);
  console.log(`${input} -> ${markOnly}`);
}

await keyOut("src/assets/raw/logo_branca.jpg", "src/assets/site/logo-icon.png");
await keyOut("src/assets/raw/logo_azul.jpg", "src/assets/site/logo-icon-dark.png");

// Favicon: the mark on a solid navy square (transparent favicons render
// inconsistently across browser tab chrome, both light and dark).
for (const [size, name] of [
  [64, "favicon.png"],
  [180, "apple-touch-icon.png"],
]) {
  await sharp({
    create: { width: size, height: size, channels: 4, background: "#123c46" },
  })
    .composite([
      {
        input: await sharp("src/assets/site/logo-icon-dark-mark.png")
          .resize(Math.round(size * 0.72), Math.round(size * 0.72), { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toBuffer(),
        gravity: "center",
      },
    ])
    .png()
    .toFile(`public/${name}`);
  console.log(`favicon -> public/${name}`);
}
