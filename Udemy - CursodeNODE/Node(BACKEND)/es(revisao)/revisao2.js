const { compact } = require("lodash")

const soma = (a, b) => a + b

console.log(soma(2,5 ))


//operador rest
//esses parametros serão agrupados em um parametro dentro do arrray

//espalhar ou agrupar


function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,5,6,1))



let acumulador = (valores) => {
    contador = 0
    for(let i = 0; i < valores.length; i++){
        contador = contador + valores[i]
    }
    return contador
}

console.log(acumulador([2,8,10]))


const SomarReduce = (valor) => {
    const somar = valor.reduce((valor, acumulador) => acumulador + valor )
    return somar
}

console.log(SomarReduce([10,20]))