//colecao dinamica de pares chave/valor

const produto = new Object
produto.nome = "cadeira"
produto["marca do produto"] = "Genérica"
delete produto.nome
console.log(produto)

const objeto = {
    nome: "paulo",
    coca(){
        console.log("colocacola")
    }
}

objeto.coca()