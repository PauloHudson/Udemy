//receba uma array com qunatidade indetermianda e retorne a média simples...



let mediaSimples = (valores) => {
    somartudo = 0
    for(let i = 0; i < valores.length; i++){
        somartudo += valores[i]
    }
    media = somartudo / valores.length
    console.log(media)
}

mediaSimples([0,10])


//com map. e reduce...

let somador = (array) => {
    let SimpleComReduce = array.reduce((t1, somador) => t1 + somador)
    mediaSimples = SimpleComReduce / array.length
    console.log(mediaSimples)
}

somador([1,2,3,4,5])