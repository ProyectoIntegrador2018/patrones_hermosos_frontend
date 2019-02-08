var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

function handleErrors(e) {
	var args = Array.prototype.slice.call(arguments);
	// console.log(e);
	// console.log(args);

	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);
	this.emit('end'); // Keep gulp from hanging on this task
}

function styles() {
	return gulp.src('./src/css/**/*.scss')
		// .pipe(plumber())
		.pipe(sass.sync({outputStyle: 'expanded'}).on('error', handleErrors))
		.pipe(gulp.dest('./tmpbuild'))
		// .pipe(browserSync.reload({stream:true}));
}

function watch() {
	gulp.watch("src/css/*.scss", gulp.series(styles));
}

var build = gulp.series(styles, watch);

exports.styles = styles;
exports.watch = watch;
exports.build = build;
exports.default = build;

