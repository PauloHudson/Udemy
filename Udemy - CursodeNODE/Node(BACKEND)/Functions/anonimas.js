const soma = function(a, b){
    return a *b
}

const imprimirResutlado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResutlado(3, 4)
//passar diretamente na chamada..
imprimirResutlado(3, 4, function (x, y){
    return x -y
})
//funções arrow sempre serão anônimas.
imprimirResutlado(3,4, (x,y) => x * y)
//criar uma função dentro de um obj

const howie = {
    cagar: function (){
        console.log("Howie, Caga Muito")
    }
}

howie.cagar()