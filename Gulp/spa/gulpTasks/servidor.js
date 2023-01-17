const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function servidor(cb){
    //monitorar arquivos quanto tiver mudança ele atualiza.
    watch('src/**/*.html', () => gulp.series('appHTML') ())

    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}