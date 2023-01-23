//importar react é o "núcleo" da lib
//react dom é a parte do react que conversa com a DOM, diretamente com a página.
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/primeiro'
//posso passar esse elemento com parametro para uma função;;


//const elemento = <h1> React 2</h1>


//isso na verdade é um jsx
ReactDOM.render(<Primeiro />, document.getElementById('root'))

//$('<h1>').html('react 2') algo semelhante ao jquery. s