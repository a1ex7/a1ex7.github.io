var gulp            = require('gulp');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var browserSync     = require('browser-sync');


gulp.task('sass', function() {
    return gulp.src('sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ''
        },
        notify: false   
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);