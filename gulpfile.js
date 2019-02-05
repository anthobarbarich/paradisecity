var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const gulpImageresize = require("gulp-image-resize");
const gulpNewer = require("gulp-newer");
const webp = require('gulp-webp');


gulp.task('default',['images']);


gulp.task('images', () =>
    gulp.src('static/images/uploads/**')
        .pipe(gulpNewer('static/images/uploadsPartners'))
        .pipe(imagemin([    
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 60
            }),
            imagemin.optipng({optimizationLevel: 7}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulpImageresize({
            width : 800,
			quality : 0.6,
          }))
        .pipe(gulp.dest('static/images/uploads'))
        .pipe(gulpImageresize({
            width : 300,
			quality : 0.7,
          }))
        .pipe(gulp.dest('static/thumbs/images/uploads')) 
		  
		 .pipe(gulpImageresize({
            width : 132,
			quality : 0.7,
          }))
        .pipe(gulp.dest('static/images/uploadsPartners'))
);
