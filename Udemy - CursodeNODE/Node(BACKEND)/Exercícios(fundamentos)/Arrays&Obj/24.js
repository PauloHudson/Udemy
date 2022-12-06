//funcao recebe o caractere buscado e uma frase, e ela tem que contar quantas vezes esses caractere apareceu..


let ContadorLetra = (letra, frase) => {
    contador = 0
    for(let i = 0; i < frase.length; i++){
        if(frase[i] === letra ){
            contador ++
        }
    }
    console.log(contador)
}



ContadorLetra("i","idiotiiiiiia")