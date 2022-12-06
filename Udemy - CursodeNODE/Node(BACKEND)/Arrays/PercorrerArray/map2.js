const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kitLapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]
let transform = Object.keys(carrinho).map(i => JSON.parse(carrinho[Number(i)]))
//json.parse está transformando as string em objeto.
let receber = transform.map(function(elemento){
    return{
        "preco": elemento.preco
    }
})

console.log(receber)

//ouu
const ParaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(ParaObjeto).map(apenasPreco)
console.log(resultado)

let somarValores = resultado.map(function(numeros){
    for(i = 0; i < resultado.length; i++){
        i = i + numeros
    }
})

console.log(somarValores)