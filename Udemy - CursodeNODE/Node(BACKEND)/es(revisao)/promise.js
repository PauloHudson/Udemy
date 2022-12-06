 function falarDepoisde(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 2000)
    })
}


falarDepoisde(3, 'Que Legal')
    .then(frase => frase.concat("²³³³³"))
    .then(OutraFrase => console.log(OutraFrase))
    .catch(e => console.log(e))



//ela aceita aprenas um parametro..