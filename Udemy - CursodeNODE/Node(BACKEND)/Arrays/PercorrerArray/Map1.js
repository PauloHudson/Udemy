const num = [1, 2, 3, 4, 5]
//quero gerar um array com o dobro do array num
//alem de ter o for ele faz uma transfrmaçaõ
let resultado = num.map(function(elemento){
    return elemento * 2
})

console.log(resultado)

//criei uma variavel para guardar o resultado
//passei a funcao map ela vai pegar cada valor do array(num) e vai trasnformar
//no caso vai retornar cada elemento * 2
//map(x, y, z)
//x vai receber os elementos.(values)

//map geraum novo array, nao trasnforma o array atual.

const soma10 = (elemento) => {return elemento + 10}
const triplo = (elemento) => {return elemento * 3}
const paraReal = (elemento) => {return `R$ ${parseFloat(elemento).toFixed(2).replace(".",",")}`}

//para executarmso isso criamos uma var e passamos os results.

let resultadoSoma = num.map(soma10).map(triplo).map(paraReal)
console.log(resultadoSoma)