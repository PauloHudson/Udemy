const pessoa = {
    nome: "rebeca",
    idade: 22,
    peso: 55,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, "dateNascimento", {
    enumerable: true,
    writable: false,
    value: "01/02/2000"
})
//ou simplesmente

pessoa.dateNascimento = "01/01/2002"

console.log(pessoa.dateNascimento)

//object assign...
//crio um destin oe consio colocar outros objetos dentro dele..
const dest = {a: 1}
const o1 = {b: 2}
const o3 = {c: 3}
const Objeto = Object.assign(dest, o1, o3)
console.log(Objeto)