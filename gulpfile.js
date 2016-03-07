var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep').stream;

gulp.task('bower', function(){
  gulp.src('./src/index.html')
      .pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
      }))
      .pipe(gulp.dest('./build'));
});

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: "./build",
      routes: {
        "/bower_components": "./bower_components"
      }
    }
  });
  gulp.watch('src/*.js', ['js-watch']);
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('js', function(){
  gulp.src([
  './src/test?.js'
  ])
  .pipe(gulp.dest('build'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['js', 'serve']);
