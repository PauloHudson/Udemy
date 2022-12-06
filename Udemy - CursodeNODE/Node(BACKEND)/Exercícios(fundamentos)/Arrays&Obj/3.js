
//crie uma func que receba quantas horas o trabalhador trabalha por dia e o valor de sua hora e mostre seu salário...


let SalarioFunc = (horas, valorH) => {
    salario = horas * 30 * valorH
    console.log(`Você trabalhou ${horas*30} Horas no mês e irá receber R$${salario}`)
}

SalarioFunc(8, 40)