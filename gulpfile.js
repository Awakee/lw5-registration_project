var gulp = require('gulp');
var minjs = require('gulp-uglify');
var mincss = require('gulp-clean-css');
var suffix = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  html:['src/index.html'],
  css:['src/css/style.css'],
  script:['src/js/registration.js']  
};

gulp.task('default', ['watcher', 'browserSync']);
gulp.task('build', ['minjs', 'mincss']);

gulp.task('css', function(){
    gulp.src(paths.css)
    .pipe(reload({stream:true}))
});

gulp.task('script', function(){
    gulp.src(paths.script)
    .pipe(reload({stream:true}))
});

gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('watcher',function(){
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.script, ['script']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('minjs', function () {
  gulp.src(paths.script)
  .pipe(minjs())
  .pipe(suffix({suffix: '.min'}))
  .pipe(gulp.dest('build/src/js'));
  var target = gulp.src(paths.html);
});

gulp.task('mincss', function() {
  return gulp.src(paths.css)
  .pipe(mincss())
  .pipe(suffix({suffix: '.min'}))
  .pipe(gulp.dest('build/src/css'))
});

gulp.task('browserSync', function() {
  browserSync({
  server: {
  baseDir: "src/"
  },
  port: 8080,
  open: true,
  notify: false 
  });
});