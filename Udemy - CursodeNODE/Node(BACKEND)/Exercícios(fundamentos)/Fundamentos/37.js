/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/


function Pa(n1, a1, r){
    an = a1 + (n1 - 1) * r
    soma = n1 * (a1 + an) / 2
    console.log(`Soma: ${soma} `)
}
function Pg(n1,a1,r){
    an = ((a1*r)**n1-1)
    soma = (a1 * ((r**n1)-1))/(r-1)
    console.log(`Soma: ${soma} `)
}
Pa(10, 10 ,15)
Pg(10, 5, 3)
