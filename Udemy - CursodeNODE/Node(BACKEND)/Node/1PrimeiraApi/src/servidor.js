const porta = 3003
const bancodeDados = require('./bandodedados.js')
const bodyparser = require('body-parser')
const express = require('express')
const app = express()


app.use(bodyparser.urlencoded({extended: true}))


                      //ENTRADA, EXECUCAO, SAIDA.
app.get('/produtos', (req, res, next) =>{
    res.send(bancodeDados.getProdutos()) //vai converter para json..

})
//tem como objetivo pegar uma inf do servidor...
app.get('/produtos:id', (req,res, next) => {
    res.send(bancodeDados.getProduto(res.params.id))
})

app.post('/produtos', (req,res,next) => {
    const produto = bancodeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})


app.listen(porta, () => {
    console.log("servidor Executando...")
})
