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


function copiar(cb){
    console.log('Tarefa de Copiar')
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