//class é uma forma diferente de construir função em js.
//apartir de uma class distanciar obj...
class Pessoa{
    constructor(nome){
         this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const pessoa1 = new Pessoa("maria")
pessoa1.falar()

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa("Dude")
p2.falar()