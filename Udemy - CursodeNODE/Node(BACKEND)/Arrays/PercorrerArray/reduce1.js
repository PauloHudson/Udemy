const alunos = [
    {nome: "joao", nota: 7.3, bolsista: true},
    {nome: "Credo", nota: 2, bolsista: true},
    {nome: "Dodio", nota: 1.3, bolsista: false},
    {nome: "Dodio", nota: 5, bolsista: false},
    {nome: "Dodio", nota: 2.1, bolsista: false},
]


const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador+atual
})

console.log(resultado.toFixed(2))