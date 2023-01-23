import React, {Component} from 'react'

//2waytadabase tanto o componente pode atualizar os dados, quanto os dados podem atualizar os componentes. 
//o estado muda para que o elemento se atuaize ----react.... o componente só é atualizado quando o estado muda.
//já importamos diretamente o component, mas também poderiamos usar React.Component
export default class Saudacao extends Component{
    state ={
        tipo : 'olá',
        nome : "pedro"
    }
    setTipo(e){
        this.setState({tipo: e.target.value})
    }


    render(){
        //como props não está diretament presente em uma class, preciso referenciar e a chamar
        //usamos o this como obj global e o referenciamos.
        //tirando os parametros necessários.
        const {tipo, nome} = this.state
        //em outras palvars quando on change for chamado, ele vai disparar o setTIPO. (e)( é o paramtro )
        return (
            <div>
                <h1> {tipo} {nome}! </h1>
                <hr />
                <input type='text' placeholder='Tipo...' value={tipo} onChange={e => this.setTipo(e)}/>
                <input type='name' placeholder='Tipo...' value={nome} />
            </div>
        )
    }

}