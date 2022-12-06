//12) Faça um algoritmo que calcule o fatorial de um número.
function fatorial(valor){
    let contador = valor
    while(valor > 1){
        valor--
        contador = contador * valor
    }
    return{
        contador
    }
    }

//3 = 3.2.1
console.log(fatorial(10))