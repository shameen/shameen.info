var gulp = require('gulp');
var durandal = require('gulp-durandal');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

 
gulp.task('durandal', function(){
    return durandal({
		baseDir: 'Website/app',
		main: 'main.js',   //Same as default, so not really required. 
		output: 'shameen.info.js',
		almond: true,
		minify: true
	})
	.pipe(gulp.dest('Website'));
});
 
gulp.task('less', function () {
  return gulp.src('Website/less/*.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('Website/css'));
});

gulp.task('watch', function() {
	gulp.watch('Website/app/**/*.js', function(event) {
        gulp.run('scripts');
    });
	gulp.watch('Website/app/views/*.html', function(event) {
        gulp.run('durandal');
    });
	gulp.watch('Website/less/**/*.less', function(event) {
        gulp.run('less');
    });
});

gulp.task('styles', ['less']);
gulp.task('scripts', ['durandal']);
gulp.task('default', ['scripts', 'styles', 'watch']);