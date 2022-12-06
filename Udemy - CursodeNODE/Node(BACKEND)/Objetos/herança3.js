const pai  = {
    nome: "pedro",
    corCabelo: "preto"
}

//então filha recebeu como parametro as heranças do pai, (ela já tinha nome, cor cabelo), cabe a nós alteramos.....
const filha1 = Object.create(pai)
filha1.nome = "Maria"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: "bia", writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = "carla"
console.log(filha2.nome)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key): console.log("sim")
}