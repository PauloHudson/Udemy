//elabora uma fun que receba um numero e retorne ++ pra quantidade de numeros digitados.

let NMais = (x) =>{
    let vazio = ''
    for(i = 0; i < x; i++){
        vazio = vazio + '+'
    }   
    console.log(vazio)
}
NMais(7)