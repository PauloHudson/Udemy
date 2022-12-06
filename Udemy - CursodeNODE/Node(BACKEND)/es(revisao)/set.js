//não indexado
//não aceita repetição

const times = new Set()
times.add('vasco')
times.add('São paulo').add('Palmeiras')


console.log(times)
console.log(times.size)
console.log(times.has('vasco'))


//criar apartir de um array

const nomes = ['paulo','bruna']
const nomesComSet = new Set(nomes)
console.log(nomesComSet)
