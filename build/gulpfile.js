var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function() {
    return gulp.src("../dist/**/*")
        .pipe(deploy({
            remoteUrl: "https://github.com/shekhar94/shekhar94.github.io.git",
            branch: "master"
        }));
});