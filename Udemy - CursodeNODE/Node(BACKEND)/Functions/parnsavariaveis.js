function soma(){
    let soma = 0
    for (i in arguments) {
        //i se torna cada valor dentro do array. 
        //toda função tem o arguments(ele é um array interno)
        //quando nenhum parametro é passado esse array está vazio. e aí temos a possibilidade de acessar ele mais tarde. 
        //pegar todos os seus parametros. 
        //arguments é um array, ele pega todos os valores de arguments. 
        soma += arguments[i]
        //aqui está assim para acessar apenas o valor dentro do array. 
    }
    return soma
}
//caso fosse só strings ele concatenaria. "oi""olá"
console.log(soma(2, 5, 33))