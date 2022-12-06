//recebera como parametro um numero entre 0 e 10...............
//sera gerado um valor aleatorio entre 0 e 10.
//se o valor digitado for igual ao valor sorteado de parabéns se não pena.

let Sorte = (numero) => {
    let sorteador = Math.floor(Math.random()* 11)
    if(numero === sorteador){
        console.log(`Parabéns Você Acertou o numero Sorteado foi ${sorteador}` )
    }else{
        console.log(`Que pena você errou o numero sorteado foi ${sorteador}`)
    }
}


Sorte(2)