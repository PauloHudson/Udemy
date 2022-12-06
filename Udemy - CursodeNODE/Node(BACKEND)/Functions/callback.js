//chamar de Volta. callback

const fabricantes = ['Mercedes', "audi", "bmw"]
//criei um array. 

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
//ou seja para cada valor, ele vai executar afunção,
//ele vai executar a quantidade de valores dentro de fabricantes, a função imprimir.s
fabricantes.forEach(imprimir)

fabricantes.forEach(fabricantes => console.log(fabricantes))

//ele chama de volta, ele percorre cara elemento do array. elemento e indice.