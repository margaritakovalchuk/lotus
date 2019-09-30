var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoPrefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps  = require('gulp-sourcemaps');

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

function sync() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/sass/**/*', gulp.series(sass));
    gulp.watch("*.html").on('change', browserSync.reload);
}

exports.sass = gulp.series(sass);
exports.build = gulp.series(sync);
