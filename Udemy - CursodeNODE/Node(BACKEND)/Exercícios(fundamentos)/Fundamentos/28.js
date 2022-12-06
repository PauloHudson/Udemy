//28) Ler a quantidade números inteiros e negativos de uma determianda quantiade de números...


function leitura(Numeros){
    let QuantPares = 0
    let QuantImp = 0
    
    for(contador = 0; contador < Numeros.length; contador++){
        if(Numeros[contador] % 2 === 0){
            QuantPares = QuantPares + 1
        }else{
            QuantImp = QuantImp + 1
        }
    }
    console.log(`${QuantPares}`)
  
}
Numeros = [2, 4, 5, 6, 7, 7, 5, 1]
leitura(Numeros)
