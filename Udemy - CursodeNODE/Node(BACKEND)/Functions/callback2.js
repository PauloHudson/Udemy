const notas = [7.7, 4.3, 3.1, 7.5, 4.2, 9.5]

//sem callback
let notasBaixas = []
for (i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
    //usamos o i para referenicar que queremos apenas os valores do array. 
}
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
//ele vai retornar true e false, as trues ele adiciona em NotasBaixas.
//o resultado da funcao filter vai ser outro array(notasbaixas.)
//ele só adicionára ao novo array, os valores que quando passarem por filter, forem true.

console.log(notasBaixas2)

const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)