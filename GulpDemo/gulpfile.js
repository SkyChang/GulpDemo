var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

gulp.task('service', ['js'], function () {

    browserSync.init({
        proxy: "localhost:14156"
    });

    gulp.watch("./scripts/*.js", ['js-watch']);
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('js', function () {

    var b = browserify({
        entries: './scripts/app.js',
        debug: true
    });

    return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/scripts/dist'))
    .pipe(notify({ message: "Scripts task complete", onLast: true }))
    .pipe(browserSync.stream({stream:true}));
});

gulp.task('default', ['service']);