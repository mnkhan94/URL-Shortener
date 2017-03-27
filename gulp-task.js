const gulp = require('gulp');
const utility = require('utility-tool-mnkhan');
const argv = require('yargs').argv;

const bumpVersion = ' ';

if (argv.major) {
  bumpVersion = 'major';
} else if (argv.minor) {
  bumpVersion = 'minor';
} else {
  bumpVersion = 'patch';
}

gulp.task('bump', () => {
  gulp.src('./package.json')
    .pipe(util.bump({
      typeofIncrement: bumpVersion,
    }))
        .pipe(gulp.dest('./'));
});