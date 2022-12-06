const fs = require('fs')

const produto = {
    nome: "celular",
    preco: 1999,
    desconto: 0.15
}
                                                //transfora um obj em JSON.
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (erro) => {
    console.log(erro || 'arquivo salvo!')
})