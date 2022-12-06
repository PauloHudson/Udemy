/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo8*/
function validador(number){
   switch(number){
    case 0:
        console.log("zero")
        break;
    case 1:
        console.log("Um")
        break;
    case 2:
        console.log("dois")
        break;
    case 3:
        console.log("três")
        break;
    case 4:
        console.log("quatro")
        break;
    case 5:
        console.log("cinco")
        break;
    case 6:
        console.log("seis")
        break
    case 7:
        console.log("sete")
        break
    case 8:
        console.log("oito")
        break
    case 9:
        console.log("nove")
        break
    case 10:
        console.log("Dez")
        break
     default:
        console.log("numero inválido...... (0 a 10)")
}
}

validador(2)
validador(6)
validador(1)
validador(22)
