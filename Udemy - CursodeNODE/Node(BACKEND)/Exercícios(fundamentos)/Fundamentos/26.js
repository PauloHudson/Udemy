//26) Fazer um programa para encontrar todos os pares entre 1 e 100.



function pares(){
    NumbersPares = []
    cont = 0
    while(cont < 100){
        cont = cont + 1
        if(cont % 2 === 0){
            NumbersPares.push(cont)
        }

    }console.log(NumbersPares)
}
pares()