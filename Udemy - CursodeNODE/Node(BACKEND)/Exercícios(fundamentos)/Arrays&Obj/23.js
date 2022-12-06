///cria uma func que conte quantas palavras contem em uma string...



let contador = (Palavra) => {
    let contar = Palavra.split(" ")
    return contar.length
}

console.log(contador("Eu Te Amo Bruna"))