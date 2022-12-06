/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/
function percorrervetor(vetor){
    let contadorNMRSNEG = 0
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            contadorNMRSNEG++
        }
    }console.log(`a Quantidade de numeros negativos é ${contadorNMRSNEG}`)
}
vetor = [-1, 2, -5, 6, -1, -2]
percorrervetor(vetor)