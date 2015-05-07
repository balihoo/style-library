var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	rename = require('gulp-rename'),
	del = require('del');

var paths = {
	sass: './_sass/balihoo-bootstrap.scss',
	dest: './build'
};

gulp.task('sass', function () {
	return sass(paths.sass, {
				style: 'compressed',
				precision: 10
			})
		.on('error', function (err) {
				console.error('Error!', err.message);
			})
	.pipe(rename({
			suffix: '.min'
		}))
	.pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function () {
	del([paths.dest], function (err, p) {
			console.log('Deleted files/folders:\n', p.join('\n'));
		});
});

gulp.task('default', function() {
	console.log(
			'\n'
			+ 'Whoa there buddy. This script doesn\'t do anything by default. See available commands below.'
			+ '\n'
			+ '\033[1;33mAVAILABLE COMMANDS:\033[0m\n'
			+ '\033[0;32msass:\033[0m Build sass files for distribution. Outputs to \'./build\'.\n'
			+ '\033[0;32mclean:\033[0m Clean up localy built files.'
			+ '\n'
		);
});
