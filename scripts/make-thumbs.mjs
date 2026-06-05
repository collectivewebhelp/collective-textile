import sharp from "sharp";
import fs from "fs";
import path from "path";

const fullDir = path.join(process.cwd(), "public", "full");
const thumbDir = path.join(process.cwd(), "public", "thumbs");

if (!fs.existsSync(fullDir)) {
  console.error("Missing folder: public/full");
  process.exit(1);
}

if (!fs.existsSync(thumbDir)) {
  fs.mkdirSync(thumbDir, { recursive: true });
}

const allowed = [".jpg", ".jpeg", ".png", ".webp"];

const files = fs
  .readdirSync(fullDir)
  .filter((file) => allowed.includes(path.extname(file).toLowerCase()));

console.log(`Found ${files.length} image(s) in public/full`);

if (files.length === 0) {
  console.log("No images found. Put your rug images inside public/full.");
  process.exit(0);
}

for (const file of files) {
  const inputPath = path.join(fullDir, file);
  const name = path.parse(file).name;
  const outputPath = path.join(thumbDir, `${name}.jpg`);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1200,
      height: 1200,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 86,
      mozjpeg: true,
    })
    .toFile(outputPath);

  console.log(`Created thumbnail: public/thumbs/${name}.jpg`);
}

console.log("Done.");