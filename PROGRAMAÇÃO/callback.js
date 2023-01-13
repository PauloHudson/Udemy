
//ele está enviando dois valores....
function Receber(callback){
    let valor1 = 2023
    let valor2 = 2002
    callback(valor1, valor2)
}
//como a de cima está enviando dois parametro,
//essa função espera receber dois valores....
//daí qualquer variável receberia os valores da de cima. 
function Enviar(x, y){
    console.log(`${x + y} Eu te amo muito mesmo :D `)
}

Receber(Enviar)