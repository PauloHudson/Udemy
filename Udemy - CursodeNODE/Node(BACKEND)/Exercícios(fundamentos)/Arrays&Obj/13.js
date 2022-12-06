//receberá um obj, e retorará m array  de arrays. para cada chave evalor retorne um array.

function receberChaves(objeto){
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chaves => [chaves, objeto[chaves]])
    return resultado
}

console.log(receberChaves({nome: "paulo", idade: 20}))

//or

function ObjetoArrayTransform(obj){
    return Object.entries(obj)
}

console.log(ObjetoArrayTransform({nome: "paulo", idade: 20}))