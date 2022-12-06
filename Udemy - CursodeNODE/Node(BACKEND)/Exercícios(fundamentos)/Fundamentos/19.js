/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/
function lanchonete(id, quantidade){
    switch(id){
        case 100:
            console.log(`[Cachorro-Quente]R$ ${3.20 * quantidade.toString().replace(".",".")} A serem Pagos.`)
            break;
        case 200:
            console.log(`[Hamburguer-simples]R$ ${4.20 * quantidade.toString().replace(".",".")} A serem Pagos.`)
            break;
        case 300:
            console.log(`[CheeseBurguer]R$ ${5.50 * quantidade.toString().replace(".",".")} A serem Pagos.`)
            break;
        case 400:
            console.log(`[Bauru]R$ ${7.50 * quantidade.toString().replace(".",".")} A serem Pagos.`)
            break;
        case 500:
            console.log(`[Soda]R$ ${3.50 * quantidade.toString().replace(".",".")} A serem Pagos.`)
            break;
        case 600:
            console.log(`[Suco]R$ ${2.80 * quantidade.toString().replace(".",".")} A serem Pagos.`)
            break;
    }
}
lanchonete(100, 2)
lanchonete(200, 2)
lanchonete(600, 2)
