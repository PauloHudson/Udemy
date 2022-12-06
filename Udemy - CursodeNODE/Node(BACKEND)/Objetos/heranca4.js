function aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId

}

const aula1 = new aula("bem vindo", 123)
console.log(aula1)

//simulanod o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.protoype
    f.apply(obj, params)
    return obj
}


const aula3 = novo(aula, "bem Vindo", 123)
console.log(aula3)