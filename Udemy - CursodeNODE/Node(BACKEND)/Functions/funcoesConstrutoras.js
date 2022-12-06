//funcoes construtoras serevem de modle para a criação de objs...

//criamos um modelo para criar objs
//o this aqui funciona para referenciar o obj...
//é igual á celular.modelo, celular.marca, celular.tamanho....
function Celular (Marca, Modelo, Tamanho){
    this.Marca = Marca,
    this.Modelo = Modelo,
    this.Tamanho = Tamanho,
    this.ligar = function (){
        console.log("RECEBENDO LIGAÇÂO")
    }
}

const Asus = new Celular("Asus", "A505", 5.5)
console.log(Asus)