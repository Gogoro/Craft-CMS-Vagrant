
//  Require modules
var gulp = require('gulp'), 
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');


/*  Sass task
 *  1. Find the files that is going to be compiled
 *  2. Sourcemaps so that you don't have to run around blind
 *  3. Error logging to the console
 *  4. Write sourcemaps
 *  5. Placing the compiled CSS file where it needs to be
 *  6. Reload the browser
 */
gulp.task('sass', function () {
    gulp.src(['./public/app/sass/*.scss', './public/app/sass/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(livereload());
});


/*  JavaScript task
 *  1. Find the files that is going to be compiled
 *  2. JsHint checks for errors in your code
 *  3. JsHint reports what it found to the console with the default reporter + stylish reporter
 *  4. Uglify the code, by making it minifyed
 *  5. Set the destination of the code
 *  6. Reload the browser
 */
gulp.task('javascript', function(){
    gulp.src(['./public/app/js/*.js', './public/app/js/**/*.js'])
	.pipe(jshint())
    .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter(stylish))
	.pipe(uglify())
    .pipe(gulp.dest('./public/assets/js'))
    .pipe(livereload());
});


/*  Watch task
 *  1. Listen to any livereload triggers
 *  2. Set watch tasks on files that should trigger a task in this script
 */
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['./public/app/sass/*.scss', './public/app/sass/**/*.scss'] , ['sass']);
    gulp.watch(['./public/app/js/*.js', './public/app/js/**/*.js'], ['javascript']);
});

// Run default tasks when typing gulp in the cmd/terminal
gulp.task('default', ['sass', 'javascript', 'watch']);
