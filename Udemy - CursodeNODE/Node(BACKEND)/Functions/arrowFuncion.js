

//mais reduzido
dobro = (a) => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return "Olá"
}

//refatorando
//estou dizendo que ela é uma variável, que recebe um parametro vázio, que se torna uma função, e retorna olax
//        é uma função vazia,(sem paramétro defindo), que vai retornar ("olax")
let olax = () => "olax" //aqui também tem um return implícito.
console.log(olax())