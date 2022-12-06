/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function aluno(nota1, nota2, nota3){
    let ReceberNotas = []
    ReceberNotas.push(nota1)
    ReceberNotas.push(nota2)
    ReceberNotas.push(nota3)
    ReceberNotas.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0
    })

    let MediaArit = ((ReceberNotas[0]*3 + ReceberNotas[1]*3 + ReceberNotas[2]*4) / (3+3+4))
    
    let validador = function(MediaArit){
        if(MediaArit < 5){
            return "REPROVADO"
         }else{
            return "APROVADO"
        } 
    }
    console.log(`${validador(MediaArit)}: Nota1: ${nota1}, Nota2: ${nota2}, Nota3: ${nota3}. Maior Nota: ${ReceberNotas[2]}. Média Aritmética ${MediaArit.toFixed(2)} `)
}
   
aluno(9,4,10)
aluno(1,2,1)
 