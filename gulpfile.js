var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var run = require('gulp-run');


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
function nucleus() {
	return run('nucleus --config config.nucleus.json').exec();
}
function styles() {
	return gulp.src('./src/css/**/*.scss')
		// .pipe(plumber())
		.pipe(sass.sync({outputStyle: 'expanded'}).on('error', handleErrors))
		.pipe(gulp.dest('./tmpbuild'))
		// .pipe(browserSync.reload({stream:true}));
}

// function nucleus() {
// 	return gulp.src('./src/css/**/*.scss')
// 		// .pipe(plumber())
// 		.pipe(sass.sync({outputStyle: 'expanded'}).on('error', handleErrors))
// 		.pipe(gulp.dest('./tmpbuild'))
// 		// .pipe(browserSync.reload({stream:true}));
// }

function watch() {
	gulp.watch("src/css/*.scss", gulp.series(styles, nucleus));
}

var build = gulp.series(styles, watch);

exports.styles = styles;
exports.watch = watch;
exports.nucleus = nucleus;
exports.build = build;
exports.default = build;

