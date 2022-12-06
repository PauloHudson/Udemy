//parametros e retornos são opcionais
function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do Permitido: ${area}`)
    }else{
        return area
        //console.log(`Valor aceito: ${area}`)
    }
}
console.log(area(4, 2))
//se passarmos mais valores, ele vai ignorar os outros além dos 2 setados... ex
console.log(area(3, 5, 3, 1, 4))