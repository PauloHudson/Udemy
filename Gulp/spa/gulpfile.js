const {series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHtml, appCSS, appJS, appIMG } = require('./gulpTasks/app.js')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')
 

//exportando as nossas funções. 
//ao mesmo tempo que vai processar o html da aplicação vai processar o css das dependências e etc...
module.exports.default = series(
    parallel(
        series(appHtml, appCSS, appJS, appIMG)
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)