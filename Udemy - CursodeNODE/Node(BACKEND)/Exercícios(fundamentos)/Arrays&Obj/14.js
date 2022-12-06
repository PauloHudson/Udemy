

let numeros = (array) =>{
    pares = []
    for(let i = 0; i < array.length; i+= 2){
        const numerospares = array[i] % 2 === 0
        if(numerospares)    
            pares.push(array[i])
    
    }
    return pares
}



console.log(numeros([2,10,70,3,20]))