//receberemos um array e filtraremos apenas os numerosoo


function numeros(array){
    return array.filter(item => typeof item === "number")
}
console.log(numeros([2,1,5, "e"]))