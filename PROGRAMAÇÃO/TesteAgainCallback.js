//uma função que espera receber outra como parametro e assim executar o seu código certo?

function Somar(callback){
    let valor1 = 5
    let valor2 = 10
    //exportando os valores praticamente.
    callback(valor1 ,valor2)
}
function Valores(valor1, valor2){
    console.log(`A soma dos Valores, ${valor1} e ${valor2} é: ${valor1+valor2}`)
}

Somar(Valores)