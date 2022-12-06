/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function ValidadorInteiro(a){
    if(a % 3 === 0){
        return true
        //console.log("true")
    }else{
        return false
        //console.log("False")
    }
}

console.log(ValidadorInteiro(30))