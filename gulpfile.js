var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoPrefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    del = require('del'),
    imgmin = require('gulp-imagemin');

var path = {
    baseDir: './dist',
    css: {
        src: './src/sass',
        dist: './dist/css',
    },
    html: {
        src: './src/pug',
        dist: './dist',
    },
    img: {
        src: './src/img/*',
        dist: './dist/img',
    }
};

function sass() {
    return gulp
        .src(path.css.src + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(sourcemaps.write())
        // .pipe(cleanCSS())
        .pipe(autoPrefix())
        .pipe(gulp.dest(path.css.dist))
        .pipe(browserSync.stream());
}

function buildHTML() {
    return gulp
        .src(path.html.src + '/**/*.pug')
        .pipe(pug({
            pretty: true,
        }))
        .pipe(gulp.dest(path.html.dist))
        .pipe(browserSync.stream());
}

function sync() {
    browserSync.init({
        server: {
            baseDir: path.baseDir,
        }
    });
    gulp.watch(path.css.src + '/**/*', gulp.series(sass));
    gulp.watch(path.html.src + '/**/*.pug', gulp.series(buildHTML));
    gulp.watch(path.html.dist + '/**/*.html').on('change', browserSync.reload);
}

function minimizeImages() {
    return gulp
        .src(path.img.src)
        .pipe(imgmin())
        .pipe(gulp.dest(path.img.dist));
}

function clean () {
    return del([
        '!dist/img',
        path.css.dist,
        path.html.dist,
    ]);
}

exports.pug = gulp.series(buildHTML);
exports.sass = gulp.series(sass);
exports.img = gulp.series(minimizeImages);
exports.build = gulp.series(clean, minimizeImages, gulp.parallel(sass, buildHTML), sync);
