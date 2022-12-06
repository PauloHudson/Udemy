//function declaration{ Normal
//a diferenca principal da declaration para a expression
//é que a declaration funcionaria antes de chegar no código ex
console.log(soma(2, 6))
//funcionaria antes de passar pelo código abaixo....





    function soma(x,y ){
        return x+y
    }


//function expression Anonima(dentro de uma var)
const sub = function (x, y){
    return x - y
}

//named function expression (dentro de uma variável porém com nome.) Bom para debug // pouco usada.
const mult = function mult(x, y) {
    return x * y
}