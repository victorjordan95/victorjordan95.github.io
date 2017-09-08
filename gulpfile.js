// TO DO
// SASS - DOC https://www.sitepoint.com/simple-gulpy-workflow-sass/
// npm install sassdoc --save-dev

// mandar exemplo cm browser-sync


var gulp         = require('gulp'),
    connect      = require('gulp-connect'),
    // SASS
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    // JS
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    jshint       = require('gulp-jshint'),
    stylish      = require('jshint-stylish'),
    // GENERAL
    htmlmin      = require('gulp-htmlmin'),
    imagemin     = require('gulp-imagemin'),
    gulpSequence = require('gulp-sequence'),
    clean        = require('gulp-clean');

// PATHS SRC
var paths = {
    html: {
        input:      'app/**/*.html'
    },
    sass: {
        input:      'app/assets/scss/**/*.scss',
        output:     'build/assets/css'
    },
    cleanJs: {
        output:     'build/js/min/all.min.js',
    },
    js: {
        input:      'app/js/**/*.js',
        output:     'build/js/',
    },
	font: {
		input:      'app/assets/fonts/icomoon.*',
        output:     'build/assets/fonts/',
	},
    jsLibs: {
        input:      'app/lib/**/*.js',
        output:  'build/lib'
    },
    imagemin: {
        input:      'app/assets/img/*',
        output:     'build/assets/img/'
    },
    livereload: {
        input:      ['app/**/*.html', 'app/**/*.js', 'app/**/*.scss']
    },
    outputGeneral: 'build'
};

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true
    });
});

// HTML
gulp.task("html", function() {
    gulp.src(paths.html.input)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(paths.outputGeneral));
});

// SASS
gulp.task('sass', function() {
    return gulp.src(paths.sass.input)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.sass.output));
});



// IMAGE
gulp.task('imagemin', function (){
    gulp.src(paths.imagemin.input)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.imagemin.output));
});

//FONTS
gulp.task('fonts', function() {
    return gulp.src([
		paths.font.input])
        .pipe(gulp.dest(paths.font.output));
});


//COPY JS
gulp.task('js', function() {
    return gulp.src([paths.js.input])
        .pipe(gulp.dest(paths.js.output));
});

// LIVERELOAD
gulp.task('livereload', function (){
    gulp.src(paths.livereload.input)
    .pipe(connect.reload());
});

// CLEAN ALL
gulp.task('cleanAll', function () {
    return gulp.src(paths.outputGeneral)
        .pipe(clean({force: true}));
});

// WATCH
gulp.task('watch', function () {
    gulp.watch(paths.html.input,    ['html']);
    gulp.watch(paths.sass.input,    ['sass']);
    gulp.watch(paths.js.input,      ['js']);
    gulp.watch(paths.livereload.input, ['livereload']);
});

gulp.task("default", gulpSequence('cleanAll', 'connect', 'sass', 'html', 'watch','js', 'imagemin', 'fonts'));
