//notas baixas
let notas = [1,2,4,5,6,7,8,9,10]

const notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)