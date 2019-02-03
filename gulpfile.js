var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const gulpImageresize = require("gulp-image-resize");
const gulpNewer = require("gulp-newer");

gulp.task('default',['images']);


gulp.task('images', () =>
    gulp.src('static/images/uploads/**')
        .pipe(gulpNewer('public/images/uploads'))
        .pipe(imagemin([    
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 35
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
            width : 600,
			quality : 0.4,
          }))
        .pipe(gulp.dest('public/images/uploads'))
        .pipe(gulpImageresize({
            width : 251,
			quality : 0.4,
          }))
        .pipe(gulp.dest('public/images/uploadsThumbs'))
);
