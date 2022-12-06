const filesistem = require('fs')

const caminho  = __dirname + '/arquivo.json'
//sincrono

const conteudo = filesistem.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
filesistem.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(config.db.host)
})

//simplesmente

const config = require('./arquivo.json')
console.log(config.db)