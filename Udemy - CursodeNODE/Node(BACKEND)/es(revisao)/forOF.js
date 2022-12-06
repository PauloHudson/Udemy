//for in intera em indice
//for of intera em values...

for (let letra of "cod3r"){
    console.log(letra)
}
const assucntosEcma = ['olá', 'minha', 'senhora']

for(let valor of assucntosEcma){
    console.log(valor)
}

//ele incorporou os valores ´['olá', 'minha', 'senhora'] em valor..

//ex de com forEach

const carros = ['porsche', 'ferrai', 'mascerati']


carros.forEach(function(valor, indice){
    console.log(`${indice+1}. = ${valor}`)
})


const assuntosmp = new Map([
    ['map', {assunto: true}],
])

for(let assunto of assuntosmp){
    console.log(assunto)
}
//printar um map com set
for(let assunto of assuntosmp.keys()){
    console.log(assunto)
}
//printar só as chaves
for(let assunto of assuntosmp.values()){
    console.log(assunto)
}
//printar só os values

//desistruturar ou sejá, separar chave de valor

for(let [chave, valor] of assuntosmp.entries()){
    console.log(chave, valor)
}