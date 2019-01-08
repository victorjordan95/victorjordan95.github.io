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
    clean        = require('gulp-clean'),
    concat       = require('gulp-concat');

// PATHS SRC
var paths = {
    html: {
        input:      'app/**/*.html',
        output:      'build/'
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
        input:      'app/assets/fonts/*.*',
        output:     'build/assets/fonts/',
	},
    jsLibs: {
        input:   'app/lib/**/*',
        output:  'build/lib'
    },
    imagemin: {
        input:      'app/assets/img/**/*',
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
        .pipe(gulp.dest(paths.sass.output))
		.pipe(gulp.dest('build/assets/css'));
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

gulp.task('libs', function() {
    return gulp.src([
		paths.jsLibs.input])
        .pipe(gulp.dest(paths.jsLibs.output));
});

//COPY JS
gulp.task('js', function() {
    return gulp.src([paths.js.input])
        .pipe(gulp.dest(paths.js.output));
});

// Concat JS
gulp.task('scripts', function () {
    return gulp.src(paths.js.input)
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(paths.js.output))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.output));;
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

gulp.task("default", gulpSequence('connect', 'sass', 'html','libs','watch','scripts', 'fonts', 'imagemin'));
gulp.task("build", gulpSequence(['clean'], 'sass','html','libs','scripts', 'fonts', 'imagemin')); 