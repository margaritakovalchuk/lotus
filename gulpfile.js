var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoPrefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug');

function sass() {
    return gulp
        .src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        // .pipe(cleanCSS())
        .pipe(autoPrefix())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}

function buildHTML() {
    return gulp
        .src('./src/pug/**/*.pug')
        .pipe(pug({
            pretty: true,
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

function sync() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/sass/**/*', gulp.series(sass));
    gulp.watch('./src/pug/**/*.pug', gulp.series(buildHTML));
    gulp.watch("./dist/**/*.html").on('change', browserSync.reload);
}


exports.pug = gulp.series(buildHTML);
exports.sass = gulp.series(sass);
exports.build = gulp.series(sync);

