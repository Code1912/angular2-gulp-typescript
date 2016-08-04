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
const minimist = require('minimist');

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
        'node_modules/immutable/dist/immutable.js'


    ],
    Release: []
};

gulp.task('libs', function () {
   return gulp.src(assetJs.Debug)
      //  .pipe(uglify())
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
            middleware: [historyApiFallback(),  compress()]
        }
    });
    gulp.watch("src/**/*.ts",["ts"]).on("change",  reload);
    gulp.watch("src/**/*.html",["html"]).on("change",  reload);
    gulp.watch("src/index.html",["index"]).on("change",  reload);
});
gulp.task("index",function () {
    return gulp.src('src/index.html')
        .pipe(htmlreplace({
            'libs': 'libs/lib.js',
            'app': 'app.js'
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('html', function () {
    return gulp.src(['src/favicon.ico','src/**/*.html','!src/index.html'])
        .pipe(gulp.dest('dist'));
    // .pipe( notify({message:"html deploy"}))
});

function reload() {
    console.log("file changed");
    browserSync.reload();
     return gulp;
}

gulp.task('d', ['ts','libs','html','index','browser-sync']);
gulp.task('default', ['ts','libs','html','index']);

