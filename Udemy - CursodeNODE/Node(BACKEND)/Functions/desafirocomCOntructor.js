//criar uma funcao constructor que receba nome.

function CriarPessoa(nome){
    this.nome = nome,
    this.FaleSeuNome = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const Pessoa1 = new CriarPessoa("Paulo")
Pessoa1.FaleSeuNome()

//podemos criar obj, apartir de uma factory, constructor e uma class.