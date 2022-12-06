//antigo e novo
//estrategia 1 para gerar valor apdrao
function soma1(a, b ,c){
    a = a || 1
    b = b || 1
    c = c || 1
    //caso a não seja um valor, ele retonra por padrão 1.
    //a vai receber a, ou se não receber 1.
    return a + b + c
}
console.log(soma1())
console.log(soma1(2))
console.log(soma1(2, 5 ,6))

//estrategia 2, 3 e 4 para gerar valor padrao.
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    //se a for diferente de undefined, ele assumira o valor de a, caso seja undefined ele será 1.
    b = 1 in arguments ? b : 1
    //como é um array ele funciona por indices
    //ou sejá dentro do array arguments, no indice[1] existe algum elementos?, caso exista ele retorna b, caso não ele retorna 1
    c = isNaN(c) ? 1 : c //essa seria a mais robusta, a que tem menos chance de dar bug.
    //se c não for um numero, retorne 1, caso seja retorne c.
    //seria a mais safe...
    return a + b + c

}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0 ,0 ,0))

//valor padrão, a forma mais nova, preferida. 
function soma3(a = 1, b = 1, c =1){
    return  a + b + c
}
console.log(soma3())
console.log(soma3(2, 3))
console.log(soma3(1, 5, 6))
console.log(soma3(2, 5, 4))
