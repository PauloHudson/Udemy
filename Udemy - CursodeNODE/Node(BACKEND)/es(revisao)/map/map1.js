//a chave é so um litoral no obj
//a chave pode ser um numero no mappppp, uma função etc ....

const tec = new Map()
tec.set('react', {framework: false})
tec.set('Angular', {framework: true})

//modo certo de chamar..........
console.log(tec.get('react'))


const chavesVariadas = new Map([
    [function (){}, 'funcao']
    [{}, 'Objeto']
    [123, 'numero']

])
                        //valor e chave
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
//has verifica se á essa chave dentro do elemento..]
chavesVariadas.delete(123)
//assim deletamos um key.
console.log(chavesVariadas.has(123))
//vai dar false já que excluimos~
console.log(chavesVariadas.size)
//mostra o comprimento do (OBJ) Map no caso com 2 elementos já que excluimos 1.. 