/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

//for
function Impares(comeco, fim){
    comeco = 0
    fim = 100
    for(comeco; comeco < fim; comeco++){
        if(comeco % 2 !== 0){
            console.log(comeco)
        }
    }
}
Impares()


//com while
function Pares(comeco, fim){
    comeco = 0
    fim = 100
    while(comeco < fim){
        comeco += 1
        if(comeco % 2 !== 0){
            console.log(comeco)
        }
    }
}
Pares()