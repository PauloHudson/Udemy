/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores*/
function validador1(a, validador1, b){
    switch(validador1){
        case "*":
           console.log(a * b)
           break;
        case "/":
            console.log(a / b)
            break;
        case "-":
            console.log(a - b)
            break;
        case "+":
            console.log(a + b)
            break;
        default:
            console.log("valor inválido...")
    }
}
//"use como parametros "Multi = *" "divi = /" "adi = + " "sub = -"
validador1(10,"+", 3)
validador1(10,"/", 3)

validador1(10,"-", 3)
