//es8 object.valeus/objesct.entries

const Bruna = {
    nome: "bruna",
    idade: 20,
    profissão: "namoradaDoPaulo"
}

console.log(Object.keys(Bruna))
console.log(Object.entries(Bruna))
console.log(Object.values(Bruna))

//melhorias na notacao literal
const nome = "carla"


const pessoa = {
    nome(){
        return 'Te AMO BRUNA'
    
    }
}

console.log(pessoa.nome())

//class

class animal {}
class cachorro extends animal {}

//função constructor...
//não pode ser uma arrow function//.....

function Construtura(marca,modelo,placa,cor){
    this.marca = marca,
    this.modelo = modelo,
    this.placa = placa,
    this.cor = cor
}

const CarreraGt = new Construtura("Porsche", "CarregaGt", "1345566778", "Prata")
console.log(CarreraGt)

//function Factory..
function Factory(modelo, marca){
    return{
        modelo,
        marca
    }
}

const nike = new Factory("Jordan", "Nike")
console.log(nike)