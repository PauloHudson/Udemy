const bodyParser = require('body-parser')
const { application } = require('express')
const express = require('express')
const app = express()

//vai prover os arquivos estáticos através desse middleware
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))

//esse código que transformara o json em obj.
app.use(bodyParser.json())

app.listen(5050, () => console.log('EXECUTANDO......'))