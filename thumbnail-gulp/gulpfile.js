/*var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function() {
    return gulp.src('src/**')
        .pipe(react())
        .pipe(concat('application.js'))
        .pipe(gulp.dest('./'))
    
});*/

var gulp = require('gulp');
var gutil = require('gulp-util');  //print debudding info
var source = require('vinyl-source-stream'); //text file handling for moveing files around in process
var browserify = require('browserify'); // figures out dependancy and load orders
var watchify = require('watchify'); // rerun build file on changes
var reactify = require('reactify'); // works on jsx conversion

gulp.task('default', function () {
   
    //bundler executes the build
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        packageCache: {},
        fullPaths: true
    }))
    
    // Causes bundler to bundle
    function build(file){
        if(file) gutil.log('Recompiling '+file);
        return bundler
            .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js'))
        .pipe(gulp.dest('./'));
    };
    
    //runs the build
    build()
    
    // on change build again
    bundler.on('update',build)
});

