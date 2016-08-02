/**
 * Created by Code1912 on 2016/8/1.
 */

 const  gulp=require("gulp");
const  uglify=require("gulp-uglify");
const notify= require("gulp-notify");
const   concat= require("gulp-concat");
const  browserSync= require("browser-sync");
const   fs= require("fs");
const  historyApiFallback= require('connect-history-api-fallback');
const   compress=require('compression');
const  tsc=require('gulp-typescript');
const  sourcemaps= require('gulp-sourcemaps');
const htmlreplace = require('gulp-html-replace');
const addsrc = require('gulp-add-src');
var assetJs= {
    Debug: [
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.min.js',
        'node_modules/angular2/bundles/router.min.js',
        'node_modules/angular2/bundles/http.min.js',


    ],
    Release: []
}

gulp.task('libs', function () {
    gulp.src(assetJs.Debug)
        .pipe(uglify())
        .pipe(concat("lib.js"))
        .pipe(gulp.dest('dist/libs'));
});

gulp.task('ts', function () {
    var tsConfig =  tsc.createProject("tsconfig.json",{
        outFile:'app.js',
        typescript:require('typescript')
    });
    var tsResult=gulp.src('src/**/*.ts')
        .pipe(tsc(tsConfig));
    return tsResult.js.pipe(addsrc.append('./config-release.js'))
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest("dist"))
});

gulp.task('browser-sync', function() {
     browserSync.init({
        server: {
            baseDir: "./dist",
        }
    });
    gulp.watch("src/**/*.ts",["ts",'reload']);
    gulp.watch("src/**/*.html",["html",'reload']);
});

gulp.task('html', function () {
     gulp.src('src/index.html')
        .pipe(htmlreplace({
            'libs': 'libs/lib.js',
            'app': 'app.js'
        }))
        .pipe(gulp.dest('dist'));

    return gulp.src(['src/favicon.ico','src/**/*.html','!src/index.html'])
        .pipe(gulp.dest('dist'));
    // .pipe( notify({message:"html deploy"}))
});
gulp.task('reload', function () {
    console.log("file changed")
    browserSync.reload();
});
gulp.task('d', ['ts','libs','html','browser-sync']);
gulp.task('default', ['ts','libs','html']);

