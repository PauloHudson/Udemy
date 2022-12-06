//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
function percorrerVeto(vetor){
    let Maior = Math.max(...vetor)
    let Menor = Math.min(...vetor)

    console.log(`O maior valor é ${Maior} o menor é ${Menor}`)
 
}

vetor = [20, 10, 1, 4, 30]
percorrerVeto(vetor)