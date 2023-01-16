const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    //selecionarar todos os arquivos com extenção .js
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        //vai "deixar feio o código, colocar em uma linha só sem espaços e etc.."
        .pipe(uglify())
        //caso aconteça algum error.
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))


    return cb()
}

exports.default = series(padrao)