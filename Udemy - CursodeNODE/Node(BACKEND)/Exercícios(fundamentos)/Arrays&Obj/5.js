//cria uma fucn que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo.......



let ReceberValores = (v1, v2) => {
    if(v1 === v2){
        return true
    }else if(v1 > v2){
        return true
    }else if(v1 < v2){
        return false
    }else{
        return false
    }
    
}

console.log(ReceberValores(1, 9))