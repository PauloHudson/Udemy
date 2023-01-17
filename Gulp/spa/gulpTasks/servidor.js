const gulp = require('gulp')
const webserver = require('gulp-webserver')

function monitorarArquivos(){
    return gulp.src('build')
        .pipe(webserver({
            port: 5050,
            open: true,
            livereload: true,
        }))
}

function servidor(cb){
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}