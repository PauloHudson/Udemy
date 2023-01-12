//importandoGulp
const gulp = require('gulp') 

//importando dentro de gulp, o series, que pega várias tarefas em série;; uma atrás da outra. (destructuring)
const {series} = require('gulp')
//ou
//const series = gulp.series


//cb de callback.
const antes1 = cb => {
    console.log('tarefa antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2')
    return cb()
}

//função que pegou arquivos da PastaA e os copiou, criou uma novoa Pasta = PastaB e os colocou lá.
function copiar(cb){
    //definimos os arquivos de entrada.
    gulp.src(['pastaA/arquivo1.txt' , 'pastaA/arquivo2.txt'])
    //podemos copiar qualquer arquivo txt, sem necessariamente descrevermos qual e copiar automáticamente.
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}
const Fim = cb => {
    console.log('FIMM')
    return cb()
}

//exportar
//espera receber uma task default.
//gulp.js como default.
//uma função em série.
module.exports.default = series(
    antes1,
    antes2,
    copiar,
    Fim,
)