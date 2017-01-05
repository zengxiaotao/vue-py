var gulp = require('gulp');
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')

gulp.task('default', function() {
	gulp.src('./vue-py.js')
		.pipe(rename('vue-py.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'))
})