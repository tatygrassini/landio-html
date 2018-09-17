var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var include = require("gulp-include");
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var notify = require("gulp-notify");

gulp.task('sass', function () {
  return gulp.src('./assets/scss/landio.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: false, }))
    .on('error', function(err) {
        notify({
          "sound": "Morse"
        }).write(err);
        this.emit('end');
    })
    .pipe(autoprefixer({
      browsers: [
        "Explorer >= 10",
        "iOS >= 9.3", // Apple iPhone 5
        "Android >= 5"
      ]
    }))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('./assets/js/landio.js')
    .pipe(sourcemaps.init())
    .pipe(include())
    .on('error', console.log)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass', 'js'], function() {
  browserSync.init({
    port: 3355,
    server: {
      baseDir: "./",
      index: "index.html",
      logSnippet: false
    }
  });

  gulp.watch('./assets/**/*.scss', ['sass']);
  gulp.watch('./assets/js/landio.js', ['js']);
  gulp.watch('./*.html').on('change', reload);
});

gulp.task('default', ['serve']);
