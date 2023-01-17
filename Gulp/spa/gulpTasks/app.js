const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const { src } = require('gulp')

function appHtml(){
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
}

function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        //uglyfi deixa tudo em uma linha
        .pipe(uglifycss({"uglyComments": true}))
        //concat joga tudo em um arquivo só
        .pipe(concat('app.min.css'))
        //final joga nessa pasta de destino.
        .pipe(gulp.dest('build/assets/css'))
}

function appJS(cb){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))

}

function appIMG(){
    return gulp.src('src/assets/imgs/**/*.*')
    .pipe(gulp.dest('build/assets/img'))
}

gulp.task('appHtml', appHtml)


module.exports = {
    appHtml,
    appCSS,
    appJS,
    appIMG
}