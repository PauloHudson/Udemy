class Lancamento {
    constructor(nome = "genérico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addlancamentos(...lancamentos){
        lancamentos.forEach( l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("salario", 45000)
const contadeLuz = new Lancamento("luz", -1200)
const contas = new CicloFinanceiro(6, 2000)
contas.addlancamentos(salario, contadeLuz)

console.log(contas.sumario())
/*
function construtora(nome, valor){
    this.nome = nome
    this.valor = valor
}*/
