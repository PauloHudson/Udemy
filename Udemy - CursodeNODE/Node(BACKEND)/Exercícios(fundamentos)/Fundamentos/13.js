//13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
//dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switc//

function ValidadorDiaSemana(dia){
    switch(dia){
        case 1:
            console.log("domingo")
            break;
        case 7:
            console.log("sabado")   
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia útil")
            break;
        default: 
            console.log("valor inválido.")
    
    }

    
}

ValidadorDiaSemana(2)
ValidadorDiaSemana(5)
ValidadorDiaSemana(7)
ValidadorDiaSemana(1)
ValidadorDiaSemana(6)
ValidadorDiaSemana(11)
