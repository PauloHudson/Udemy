

const menorsalario = (a,b) =>{
    return a > b ? a : b
}

function salario(array){
    //return array.reduce(menorsalario)
    return array.reduce(menorsalario = (a,b) => a < b ? a : b)
}

console.log(salario([10,11,12,14,15,16, 5]))