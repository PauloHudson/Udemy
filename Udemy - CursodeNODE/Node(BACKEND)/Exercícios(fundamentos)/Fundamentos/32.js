//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

function media(vetor){
    let soma = 0
    for(i = 0; i < vetor.length; i++){
        soma = soma + vetor[i]
    }
    let mediaArit = soma / vetor.length
    console.log(`Notas : ${vetor}, A média Aritmética é ${mediaArit}`)

}
vetor = [10, 3, 5, 7, 5]
media(vetor)