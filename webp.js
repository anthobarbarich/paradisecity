var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "/static/images/imgwebp2",            // Output folder
  PNGImages = "/static/images/uploads/*.png",         // PNG images
  JPEGImages = "/static/images/uploads/*.jpg";        // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 50 // Quality setting from 0 to 100
  })]
});