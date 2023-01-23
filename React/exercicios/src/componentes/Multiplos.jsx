import React from 'react'


//quando retornamos por defulta estamos retorandno por uma função anonima Padrão, por isso não podemos referenciar por VAR,LET, CONST...
export const BoaTarde = props => <h1> Boa Tarde {props.nome}  !</h1>
export const BoaNoite = props => <h1> Boa Noite {props.nome}  !</h1>

//poderiamos também exportar como default

export default BoaTarde