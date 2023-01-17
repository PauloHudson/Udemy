const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml(cb){
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
}

function appCSS(cb){
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
    return cb()
}

function appIMG(cb){
    return cb()
}

module.exports = {
    appHtml,
    appCSS,
    appJS,
    appIMG
}