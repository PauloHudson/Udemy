const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-ugligy')
const babel = require('gulp-babel')

function padrao(cb){
    //selecionarar todos os arquivos com extenção .js
    gulp.src('src/**/*.js')
    return cb
}