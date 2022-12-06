//ela cria um molde para se criar objetos 
function VideoGame(MemoriaRam, Tamanho, PrincipalJogos){
    this.MemoriaRam = MemoriaRam
    this.Tamanho = Tamanho
    this.PrincipalJogos = PrincipalJogos
}

const Xbox = new VideoGame("12Gbps", "1Metro", "Forza")
const PlayStation = new VideoGame("20gb", "1Metro", "GodOfWar")
console.log(Xbox)
console.log(PlayStation)

//com a factory
function casa(nome,endereco,cep){
    return{
        nome,
        endereco,
        cep,
    }
}

const casa1 = casa("Paulo","Rua ABC", "0728129")
console.log(casa1)
