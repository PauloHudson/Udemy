//factory
//nome e preço, vai receber desconto.

function CriarProduto(nome, preco){
    return{
    nome,
    preco, 
    }
}

console.log(CriarProduto("ovo", "maltine"))


//constructor


function CriarProdutoConstructor(nome, preco){
    this.nome = nome,
    this.preco = preco,
    this.criar = function(){
        console.log("criar")
    }

}

const asus = new CriarProdutoConstructor("A50", "25400$")
console.log(asus)