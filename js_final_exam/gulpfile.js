var gulp            = require('gulp');
var sass            = require('gulp-sass');
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var cssnano         = require('gulp-cssnano');
var sourcemaps      = require('gulp-sourcemaps');
var rename          = require('gulp-rename');
var del             = require('del');
var imagemin        = require('gulp-imagemin');
var pngquant        = require('imagemin-pngquant');
var cache           = require('gulp-cache');
var autoprefixer    = require('gulp-autoprefixer');
// var svgmin          = require('gulp-svgmin');
// var iconify         = require('gulp-iconify');
var notify          = require('gulp-notify');
var spritesmith     = require('gulp.spritesmith');



//  Sass compiler and autoprefixer
 
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', notify.onError(function (error) {
        return error.message;
    })))
    .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie >= 8'], { cascade: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}));
});


// Pack 3-rd party scripts

gulp.task('scripts', function() {
    return gulp.src([
        'src/libs/jquery-1.12.4.min.js',
        'src/libs/masonry.pkgd.min.js',
        'src/libs/imagesloaded.pkgd.min.js',
        'src/libs/jquery-imagefill.js',
        'src/libs/owl.carousel.min.js',
        // 
        // add use js libs here in right order
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js')) 
});


// CSS minifying

gulp.task('css-min', ['sass'], function() {
    return gulp.src([
        'src/css/main.css',
        'src/css/ie8.css',
    ])
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'));
});


// Live reload in browser

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false   
    });
});


// Help task for Build

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('clear', function() {
    return cache.clearAll();
});


// Image optimizing

gulp.task('img', function() {
    return gulp.src('src/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});


// Sprite generator

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/img/ico*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath: '../img/sprite.png',
            cssName: 'sprite.css',
            padding: 10,
        }));
    spriteData.css.pipe(gulp.dest('src/css/'));
    spriteData.img.pipe(gulp.dest('src/img/'));
    return;
});


// Watcher (Really cool thing)

gulp.task('watch', ['browser-sync', 'css-min', 'scripts'], function() {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/libs/**/*.js', ['scripts']);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});


// Build project

gulp.task('build', ['clean', 'img' ,'css-min', 'scripts'], function() {
    
    var buildCss = gulp.src([
            'src/css/main.css',
            'src/css/main.min.css',
            'src/css/ie8.min.css',
        ])
        .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('src/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildJsForIE = gulp.src([
            'src/libs/html5shiv.min.js',
            'src/libs/respond.min.js',
        ])
        .pipe(gulp.dest('dist/libs'));

    var buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);