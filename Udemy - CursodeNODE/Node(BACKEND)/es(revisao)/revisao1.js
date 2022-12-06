//let e const
//mutável e não mutável.
{
    var a = 2
    let b = 3
    console.log(b)
}

//template string
console.log(`${a} é um número lindo`)

//destructuring

const bruna = {nome: "Bruna", idade: 24}
const saida = {nome, idade} = bruna
console.log(saida)
