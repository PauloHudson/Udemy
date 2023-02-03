const express = require('express')
const app = express()
const saudacao = require('./saudacaomids')

//qualquer requisição vai ser usado pela função use kk
//poderiamos colocar tipo localhost:3000/euteamofdp que iria kk
// app.use('/opa'req, res) isso funcionaria, daí só /opa funcionaria..
//use qualquer requisição iria... ou ALL

//tmeos de passar o param...
app.use(saudacao('Guilherme'))



//chain of responsabillity.
//famoso middleware...
//para funcionar temos de passar a função next...
app.use((req,res, next) =>{

    console.log('te amo')
    next()

})

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

