var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src('scripts/app.js')
       .pipe(uglify())
       .pipe(gulp.dest('./wwwroot/scripts/dist'))
});


gulp.task('default', ['minify']);