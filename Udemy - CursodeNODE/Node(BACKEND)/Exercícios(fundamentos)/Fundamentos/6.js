/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const Mercado = {
    Simples(I, J, T){
        return I + (I * J * T)
    },
    Composto(I, J, T){
        return I * (1 + J) ** T
    }
}
console.log(Mercado.Simples(100, 2/100, 3))
console.log(Mercado.Composto(100, 2/100, 3))