const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Metodo post as informações não são mostradas na url do site. o get sim.
//post a informação não é mostrada na url da página, get sim.
//body parser obter dados apartir de formulario ou requisição... 
//necessário para trabalhar com método post... esse app.use
//configurar body-parser
app.use(bodyParser.urlencoded({ extended: true}))


//rotas.
//receber
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Parabéns')
})

app.listen(5050)