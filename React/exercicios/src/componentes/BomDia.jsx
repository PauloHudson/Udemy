import React from 'react'

//quando formos receber um parametro para a função usamos PROPS

//quando precisarmos passar mais de um elemento por função precisamos que esse elementos seja envolvido por uma div, um array,
//ou quando não quiseremos que ele mude o HTML, envolvemos por REACT.fragment.
export default props => 
    <React.Fragment> 
       <h1> Bom dia {props.nome}, você tem {props.idade} anos?</h1>
       <h2> Seja Muito Bem vindo :D </h2> 
    </React.Fragment>
    