const produto = [
    {nome: "notebook", preco: 2500, fragil: true},
    {nome: "Ipad", preco: 3500, fragil: false},
    {nome: "Copo", preco: 20, fragil: true},
    {nome: "Copo Plástico", preco: 2.5, fragil: false},

]

//igual ao o forEach
//filter recebe(X,Y,Z)
//x sendo os values, y o índice, z o array
console.log(produto.filter(function(p){
    return p.preco
}))
//resultado é sempre true or false........
//exemplo só passaria quem for maior que 2500.


//2 funcoes 
//os maiores que 500 e os frageis.

let caros = (valores) => valores.preco >= 500
let fragil = (valores) => valores.fragil == true
let Resultado = produto.filter(caros).filter(fragil)
console.log(Resultado)