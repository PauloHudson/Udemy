//fun que receba um array e some seus valores

let somar = (array) => {
    somardor = 0
    for(let i = 0; i < array.length; i++){
        somardor = somardor + array[i]
    }
    return somardor
}



console.log(somar([2,4,6]))