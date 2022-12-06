//bissextos 366
//ano bissexto multiplo de 4 e 400, e não pode ser de 100..

let bissexto = (ano) =>{
    if((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))){
        return true
    }else{
        return false
    }
}

console.log(bissexto(400))