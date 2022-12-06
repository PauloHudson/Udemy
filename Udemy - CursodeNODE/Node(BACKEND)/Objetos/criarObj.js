//forma literal
const obj1 = {
    nome: "paulo",
    idade: 20,
}

//object em js
obj1.nome = "Paulo"
const novoobj = new Object
console.log(obj1)

//function construtora....
function criarVar(nome, idade){
    this.nome = nome
    this.idade = idade
    this.getNome = () => {
        return nome + idade
    }
}
const paulo = new criarVar("paulo", 20)
console.log(paulo.getNome())
//viísvel fora do objeto. nom e idade ficaram público...



//factory é um padrão de projetos
function criarFuncionário(nome, salariobase, faltas){
    return{
        nome,
        salariobase,
        faltas,
        getSalario(){
            return(salariobase / 30) * (30 - faltas)
        }
    }
}
const funciona1 = criarFuncionário("paulo", 2000, 1)
console.log(funciona1)
console.log(funciona1.getSalario())