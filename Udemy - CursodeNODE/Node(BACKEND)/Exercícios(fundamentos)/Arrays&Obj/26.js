//uam func que receba um array de nmrs .. e um numero que especifica uma quantidade de digitos .
//essa func devera sretornar somente aqueles numeros do arraty que te ma quantidade degitos indicados pel oseugndo paramentro.


function filtrarValores(numeros, QuantidadeDesejada){
    return numeros.filter(numeros =>{
        const quantidadedeDigitos = String(numeros).length
        return quantidadedeDigitos === QuantidadeDesejada
    })
}



console.log(filtrarValores([5,10,20,1,5,6,7,8,67,65,5,2,4,24,234,234,234,23423], 1))