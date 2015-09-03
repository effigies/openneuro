
'use strict';

// dependencies -----------------------------------------------------------

    var gulp = require('gulp'),
        changed = require('gulp-changed'),
        sass = require('gulp-sass'),
        csso = require('gulp-csso'),
        autoprefixer = require('gulp-autoprefixer'),
        browserify = require('browserify'),
        watchify = require('watchify'),
        source = require('vinyl-source-stream'),
        buffer = require('vinyl-buffer'),
        babelify = require('babelify'),
        uglify = require('gulp-uglify'),
        del = require('del'),
        notify = require('gulp-notify'),
        browserSync = require('browser-sync'),
        sourcemaps = require('gulp-sourcemaps'),
        reload = browserSync.reload;

// project config ---------------------------------------------------------

    var p = {
        html:           './src/index.html',
        jsx:            './src/scripts/client.jsx',
        md5worker:      './src/scripts/utils/md5worker.js',
        scss:           './src/sass/**/*.scss',
        scssmain:       './src/sass/main.scss',
        libs:           './src/scripts/libs/*',
        assets:         './src/assets/*',
        fonts:          './src/sass/fonts/*',
        bundle:         'app.min.js',
        md5bundle:      'md5worker.min.js',

        dist:           'dist',
        distCss:        'dist/css',
        distAssets:     'dist/assets',
        distFonts:      'dist/fonts'
    };

// primary tasks ----------------------------------------------------------

    gulp.task('build', ['clean'], function() {
        process.env.NODE_ENV = 'production';
        gulp.start(['styles', 'copy', 'buildApp', 'buildMD5Worker']);
    });
    
    gulp.task('watch', [], function() {
        gulp.start(['browserSync', 'watchStyles', 'watchApp', 'watchMD5Worker', 'styles', 'copy' ]);
    });

    gulp.task('default',['watch'], function() {
        console.log('Running"');
    });

// tasks ------------------------------------------------------------------

    // clean before build
    gulp.task('clean', function(cb) {
          del(['dist'], cb);
    });

    // server and sync changes
    gulp.task('browserSync', function() {
        browserSync.init({
            server: './dist',
            port: 9876
        });
    });

    // copy
    gulp.task('copy', function () {
        gulp.src(p.html).pipe(gulp.dest(p.dist));
        gulp.src(p.assets).pipe(gulp.dest(p.distAssets));
        gulp.src(p.fonts).pipe(gulp.dest(p.distFonts));
    });

    // watch for changes
    gulp.task('watchApp', function() {
        var bundler = watchify(browserify(p.jsx, watchify.args));
        function rebundle() {
            return bundler
                .bundle()
                .on('error', notify.onError())
                .pipe(source(p.bundle))
                .pipe(gulp.dest(p.dist))
                .pipe(reload({stream: true}));
        }
        bundler.transform(babelify).on('update', rebundle);
        return rebundle();
    });

    // watch for changes
    gulp.task('watchMD5Worker', function() {
        var bundler = watchify(browserify(p.md5worker, watchify.args));
        function rebundle() {
            return bundler
                .bundle()
                .on('error', notify.onError())
                .pipe(source(p.md5bundle))
                .pipe(gulp.dest(p.dist))
                .pipe(reload({stream: true}));
        }
        bundler.transform(babelify).on('update', rebundle);
        return rebundle();
    });

    // bundle js
    gulp.task('buildApp', function() {
        browserify(p.jsx)
            .transform(babelify)
            .bundle()
            .pipe(source(p.bundle))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(p.dist));
    });

    // bundle md5 worker
    gulp.task('buildMD5Worker', function() {
        browserify(p.md5worker)
            .transform(babelify)
            .bundle()
            .pipe(source(p.md5bundle))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(p.dist));
    });

    // compile & minify scss
    gulp.task('styles', function() {
        return gulp.src(p.scssmain)
            .pipe(changed(p.distCss))
            .pipe(sass({errLogToConsole: true}))
            .on('error', notify.onError())
            .pipe(csso())
            .pipe(gulp.dest(p.distCss))
            .pipe(reload({stream: true}));
    });

    // watch styles
    gulp.task('watchStyles', function() {
        gulp.watch(p.scssmain, ['styles']);
        gulp.watch(p.scss, ['styles']);
    });
