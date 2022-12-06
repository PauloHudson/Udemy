/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/


function Worker(plano, salario){
    switch(plano){
        case "A":
            console.log((salario * 0.1) + salario)
            break;
        case "B": 
            console.log((salario * 0.15) + salario)
            break;
        case "C":
            console.log((salario * 0.20) + salario)
            break;
        default:
            console.log("Opção inválida")   
    }
}

Worker("A", 2000)
Worker("B", 2000)
Worker("C", 2000)

