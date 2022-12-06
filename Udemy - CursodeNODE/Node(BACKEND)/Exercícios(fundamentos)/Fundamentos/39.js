/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/
a = [0, 1, 2]
b = [2, 4, 5]
function TrocarVetores(a, b){
    if (a.length == b.length){
        for(i = 0; i < a.length; i++){
            a[i] = a[i] + b[i]
            b[i] = a[i] - b[i]
            a[i] = a[i] - b[i]
        }
        console.log(`Vetor a = ${a}`)
        console.log(`Vetor b = ${b}`)
    }else{
        console.log("Vetores de Tamanho diferentes...")
    }
}

TrocarVetores(b, a)