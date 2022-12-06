//this é a forma de referenciar o obj.
//this pode variar dependendo de como a função chama.
//this é sempre o obj que está sendo referenciador naquele contexto de execução
//this pode variar
//this não varia com a arrow function.

const ReceberNome = {
    name: "paulo",
    nome: function(){
        return this.name
    }
}

console.log(ReceberNome.nome())