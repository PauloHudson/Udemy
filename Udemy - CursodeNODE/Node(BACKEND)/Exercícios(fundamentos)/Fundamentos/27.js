/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor*/


function criancas(crianca1, crianca2, crescimento1, crescimento2){
    let primeira = crianca1 * crescimento1/100
    let segunda = crianca2 * crescimento2/100
    if(primeira > segunda){
        console.log("a primeira criança Ultrapassará a segunda Criança")
    }else{
        console.log("A segunda Criança ultrapassára a primeira Criança")
    }
}


criancas(1,4, 5, 6)