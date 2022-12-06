const aprovados = ["Agatha","Edu","Ana"]
aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}: ${nome}`)
})
//pra cada um dos elementos do array vai chamar afuncçao foreach

//dentro d ofro each tem um for, ele vai percorrer o array
//quando executar o primeiro elemento passando o nome(value) e o indice 0. e assim por conseguinte.
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)//não é tao usual
aprovados.forEach(exibirAprovados)