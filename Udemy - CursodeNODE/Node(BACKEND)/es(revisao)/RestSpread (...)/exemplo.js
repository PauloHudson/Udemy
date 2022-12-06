// o famoso ...
//rest = juntar // spread (espalhar)

const funcionario = {nome: "maria", salario: 202020}


//nesse exemplo usamos o spred(ele espalhou os atributos de (funcionario) dentro do clone...)
const clone = {ativo: true, ...funcionario}
console.log(clone)

///array


const GrupoA = ['joao', 'pedro', 'gloria']
//ta adicioanndo ao grupoFinal ....
const grupoFinal = ['paulo', 'julia', ...GrupoA]
console.log(grupoFinal)