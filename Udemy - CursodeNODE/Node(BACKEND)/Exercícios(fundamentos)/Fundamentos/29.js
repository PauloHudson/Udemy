/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/


function VerificaVetor(vetor){
    let contadordenumeros = 0
    let NoBetween10ë20 = 0
    //inicio //fim //condição
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            contadordenumeros++
        }else{
            NoBetween10ë20++
        }
    }
    console.log(`${contadordenumeros}: Quantidade de Numeros Entre 10 e 20, ${NoBetween10ë20}: Restante dos Números...`)
    
}
vetor = [1,2,5,6,7,8,9,10,11,12,16,20,21]

VerificaVetor(vetor)