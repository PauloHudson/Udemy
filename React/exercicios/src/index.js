//importar react é o "núcleo" da lib
//react dom é a parte do react que conversa com a DOM, diretamente com a página.
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import Bomdia from './componentes/BomDia'

//uma desestruturoador, setou tirando do módulo...

import Saudacao from './componentes/Saudacao'


//posso passar esse elemento com parametro para uma função;;


//const elemento = <h1> React 2</h1>

ReactDOM.render(
    <div>
        <Saudacao tipo='' nome='' />
    </div>
, document.getElementById('root'))



//isso na verdade é um jsx
//ReactDOM.render(<Bomdia nome='Paulo' idade= '20' />, document.getElementById('root'))
//ReactDOM.render(<BoaTarde nome='Gabriela'/>, document.getElementById('root'))

//$('<h1>').html('react 2') algo semelhante ao jquery. s