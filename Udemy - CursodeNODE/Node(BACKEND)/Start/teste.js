//função construtora (serve de modelo para se crir novos objs)

//relação pai/filho

//for each
let Notas = [10, 5, 7, 9, 2, 1.4, 6]
let Ojb = {nome}

//x - valores
//y - indice
//z - proprio array.
/*
Notas.forEach(function(numero, indice){
    console.log(`${indice+1}: ${numero}`)
})

*/
//MAP
/*
let Triplo = Notas.map(function(value){ return value * 3 })
    
console.log(Triplo)
*/
//Filter
/*
let NotasBaixas = Notas.filter(function(valores){ return valores < 3})
console.log(NotasBaixas) */

//reduce

let Somar = (Notas) => {
    acumulador = 0
    for(let i = 0; i < Notas.length; i++){
        acumulador += Notas[i]
    }
    return acumulador
}

console.log(Somar(Notas))

const somarComReduce = Notas.reduce(function(x, y){return x + y})
console.log(somarComReduce)