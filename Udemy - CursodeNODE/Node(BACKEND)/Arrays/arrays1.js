//arrays são objetos, porém somente com seus índices
//sem as chaves e valores
//se usar new junto de uma função o resultado é um ojbeto.

let aprovaso = new Array("bia","carla", "ana")
console.log(aprovaso)

//aqui estou passando a funçãoa array para criar o array.... ()


let Aprovados = ["bia","carlos","ana"]
console.log(Aprovados[0])

//aqui estou passando de forma literal com [ ]


Aprovados[3] = "paulo"
console.log(Aprovados[3])

//forma mais apropriada de colocar um novo conteúdoooooo
Aprovados.push("Bruna")
console.log(Aprovados)

//tamanho array
console.log(Aprovados.length)
Aprovados[7] = "Teste"
console.log(Aprovados)
//como ainda não defini o 6 elemento e já passei para o 7
//eles existem lá mas são setados como undefined..
//o sexto ficará como <2 empty items>
Aprovados[6] = "Elemento"
Aprovados[5] = "Elemento"
console.log(Aprovados)
///
/////
///
///
///
//
//deixar organizadoooo
//
Aprovados.sort()
console.log(Aprovados)
//
//
//
// EXCLUIR
delete Aprovados[1]
//ele vai deletar mas não vai redefinir as posições dos índices..

//deletar excluir e adicionar elementos....

//splice
//splice(x, y, z)
//x é responsável por definir o início da operaçõa
//y definie o fim
//z define se vai adicionar ou não

//exemplo excluir.
let teste = ["ana","Carlos","João"]
//teste.splice(0,2)
//vai excluir do indíce zero até o indíce 2
console.log(teste)

//também podemos adicionar
teste.splice(0,0,"Pedro","Lucas")
//substituiu ana e colocou pedro e lucas, caso não quizesse subscrever ana erá so colocar (0,0,"pedro","lucas")
console.log(teste)