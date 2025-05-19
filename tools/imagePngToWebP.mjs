/**
 * WebP Converter
 * Fundamentals of Web Performance
 *
 * Build tool to optimize convert the optimized PNGs in the `min` directory
 * into WebP files, placed in the `webp` directory.
 *
 * @see https://www.npmjs.com/package/imagemin
 */

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

console.log("Converting to WebP Images",);

await imagemin(['public/assets/img/webp/min/**/*.png', 'public/assets/img/*.webp'], {
  destination: "public/assets/img/webp",
  plugins: [
    imageminWebp({ quality: 50 })
  ]
});
