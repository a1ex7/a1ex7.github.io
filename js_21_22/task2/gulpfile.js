var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babel", function () {
  return gulp.src("js/src/*.js")
    .pipe(babel({
        presets: ['es2015'] 
    }))
    .pipe(gulp.dest("js/dist"));
});


gulp.task('watch', ['babel'], function() {
    gulp.watch('js/src/**/*.js', ['babel']);
});

gulp.task('default', ['watch']);