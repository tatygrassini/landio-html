var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
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
        "iOS >= 4", // Apple iPhone 5
        "Android >= 5"
      ]
    }))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    port: 3355,
    server: {
      baseDir: "./",
      index: "index.html",
      logSnippet: false
    }
  });

  gulp.watch('./assets/**/*.scss', ['sass']);
  gulp.watch('./index.html').on('change', reload);
});

gulp.task('default', ['serve']);
