//clousure é o escopo criado quando uma func e declarada.
//esse escopo permite a funcao acessar e manipular variavies externas a funcao.

//contexto léxico em ação;;;



const x = "global"

function fora(){
    const x = "local"
    function dentro(){
        return x
    }return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())