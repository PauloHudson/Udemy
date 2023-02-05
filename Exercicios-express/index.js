const express = require('express')
const app = express()
const saudacao = require('./saudacaomids')
const bodyparser = require('body-parser')
const usuarioApi = require('./api/usuario')
//qualquer requisição vai ser usado pela função use kk
//poderiamos colocar tipo localhost:3000/euteamofdp que iria kk
// app.use('/opa'req, res) isso funcionaria, daí só /opa funcionaria..
//use qualquer rquisição iria... ou ALL
//tmeos de passar o param...
app.get('/usuario', usuarioApi.salvar)
app.post('./usuario', usuarioApi.obter)





// ----------------------------------------------------
//chain of responsabillity.
//famoso middleware...
//para funcionar temos de passar a função next...
app.use((req,res, next) =>{
    console.log('te amo')
    next()
})
// ----------------------------------------------------
//método get pega apartir da url
//http://localhost:3000/cliente/relatorio?completo=Funcionando&ano=2018
app.get('/cliente/relatorio', (req, res) => {
    res.send(`cliente Relatório ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res)=>{
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })
    req.on('end', function(){
        res.send(corpo)
    })
})

// ----------------------------------------------------
app.get('/cliente/:id', (req, res) => {
    res.send(`cliente ${req.params.id} selecionado!`)
})
// ----------------------------------------------------
app.use((req, res) => {

    // ---------------------------------------------------------------------
    res.json({
     data:[
        {nome: "paulo", Sobrenome: "hudson"},
        {nome: "Luara", Sobrenome: "carlinhas"}    
    ],
    count:30,
    skip: 20,
    })
    // ---------------------------------------------------------------------
    // res.json({
    //     nome: 'Paulo',
    //     sobrenome: "Hudson",
    // })
    // ---------------------------------------------------------------------
    // res.send('Im Good')
})

// quuando essa porta ser validade ele chama a callback
app.listen(3000, () => {
    console.log('Worked ')
})

