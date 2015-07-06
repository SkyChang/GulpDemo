var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps')

gulp.task('javascript', function () {

    var b = browserify({
        entries: './scripts/app.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('./scripts/app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./wwwroot/scripts/dist'));
});


gulp.task('default', ['javascript']);