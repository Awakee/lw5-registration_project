var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var paths = {
  html:['index.html'],
  css:['src/css/style.css'],
  script:['src/js/registration.js']  
};

gulp.task('default', ['watcher', 'browserSync']);

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

gulp.task('browserSync', function() {
  browserSync({
  server: {
  baseDir: "./"
  },
  port: 8080,
  open: true,
  notify: false 
  });
});