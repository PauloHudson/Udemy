const contadorA = require('./instanciaUnica')
const ContadorB = require('./InstanciaUnica')

const ContadorC = require('./InstanciaNova')()
const ContadorD = require('./InstanciaNova')()


contadorA.inc()
contadorA.inc()
console.log(ContadorB.valor)

ContadorC.incrementador()
ContadorC.incrementador()
console.log(ContadorC.valor)