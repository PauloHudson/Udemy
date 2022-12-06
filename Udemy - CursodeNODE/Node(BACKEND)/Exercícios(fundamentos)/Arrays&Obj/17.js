//funcao que receba um array de produtos  e retorne o total das despesas.....



let totalDespesas = (array) => {
    const pegarPreco = array => array.preco
    const somar = (t1, t2) => t1 + t2
    const despesas = array.map(pegarPreco).reduce(somar)
    //let despesas = array.map((valor) => valor.preco).reduce((t1, preco) => t1 + preco)
    console.log(despesas)
}

totalDespesas([{nome: "jornal", categoria: "Informação", preco: 200},
{nome: "jornal", categoria: "Informação", preco: 200},])

