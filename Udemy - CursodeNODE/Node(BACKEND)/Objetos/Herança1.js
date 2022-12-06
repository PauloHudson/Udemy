//receber conteudo de um pai e reutilizar código...
//cadeia de protótipos


//avo tem como prototype o Object.Prototype...
Object.prototype.attr0 = "0"
const avo = { attr1: "A"}
const pai = { __proto__: avo, attr2: "B"}
const filho = {__proto__: pai, attr3: "c"}
console.log(pai.attr2)
console.log(filho.attr0, filho.attr3, filho.attr2)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelararmaia(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual }K/m h de ${this.velMax}Km/h`
    }
}

const ferari = {
    modelo: "f40",
    velMax: 324 //shadowing

}

const Volvo = {
    modelo: "v40",
    status(){
        return `${this.modelo}:${super.status()} `
    }
}

Object.setPrototypeOf(ferari, carro)
//outra forma de definir herança. "ferria terá carro de herança"
//ferrari tera como protótipo carro..
Object.setPrototypeOf(Volvo, carro)

console.log(ferari)
console.log(Volvo)
Volvo.acelararmaia(100)
console.log(Volvo.status())