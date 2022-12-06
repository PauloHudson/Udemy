//crie uma func que receba 3 parametro e veja se elá está entre o máx e o min (recebera (numero,min e max.))

let Comparando = (numero, min, max) => {
    if(numero >= min && numero <= max){
        return true
    }else{
        return false
    }
}

console.log(Comparando(11,0,10))