const {series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHtml, appCSS, appJS, appIMG } = require('./gulpTasks/app.js')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')
 

//exportando as nossas funções. 
module.exports.default = series(
    parallel(
        series
    )
)