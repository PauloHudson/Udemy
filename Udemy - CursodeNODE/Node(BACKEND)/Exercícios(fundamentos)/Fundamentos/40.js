/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A */




function ValidarNotas(vetornotas){
    GuardarNotas = []
        for(let i = 0; i < vetornotas.length; i++){
                //vai percorrer o (vetor)
            if(vetornotas[i] <= 4.9 && vetornotas[i] >= 0){
                GuardarNotas.push("D")
            }else if(vetornotas[i] <= 5 && vetornotas[i] >= 6.9){
                GuardarNotas.push("C")
            }else if(vetornotas[i] <= 7 && vetornotas[i] >= 10){
                GuardarNotas.push("A")
            }else{
                GuardarNotas.push("Nota inválida.....")
    }
    return GuardarNotas
    }
}

let vetornotas = [2, 10, 5, 6, 7, 8]
let vetorConceitosx = ValidarNotas(vetornotas)

console.log(vetorConceitosx)