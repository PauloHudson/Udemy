const pessoa = {
    saudacao: "bom dia",
    falar() {
        console.log(this.saudacao)
        //mesma coisa que pessoa.saudacao
    }
    //forma nova de criar função no js, invés de
    //falar: function(){}

    
}
pessoa.falar()

const falar = pessoa.falar                   
//armazenei dentro de uma variável.
//da errooo
//conflito entre paradigmas, funcion e obj.
const FalardePessoas = pessoa.falar.bind(pessoa)
//fixamos em uma variável a chave(função) de um objeto.
//bind amarra o obj para ele ser o dono, e assim possamos criar var fora do escopo do obj.
//sempre que vdc referenicar o this, ele sempre será o obj que passamos para a função bind.
FalardePessoas() 