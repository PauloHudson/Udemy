const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = (f) => f.pais === 'China'
const mulheres = (f) => f.genero === 'F'
const menorSalario = (func, FuncionarioAtual) => {
    return func.salario > FuncionarioAtual.salario ? func : FuncionarioAtual
}

//get obtem informação do servidor (recebe)
axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
})