import React, {Component} from 'react'


//já importamos diretamente o component, mas também poderiamos usar React.Component
export default class Saudacao extends Component{
    render(){

        //como props não está diretament presente em uma class, preciso referenciar e a chamar
        //usamos o this como obj global e o referenciamos.
        //tirando os parametros necessários.
        const {tipo, nome} = this.props
        return (
            <div>
                <h1> {tipo} {nome}! </h1>
                <hr />
                <input type='text' placeholder='Tipo...' value={tipo} />
                <input type='name' placeholder='Tipo...' value={nome} />
            </div>
        )
    }

}