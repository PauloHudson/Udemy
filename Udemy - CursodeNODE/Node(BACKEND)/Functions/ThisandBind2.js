function Pessoa()
    //THIS SERVE PARA DECLARAR UM OBJ, COMO NESSE CASO O OBJ É NULO, THIS SE TORNA O PRÓPRIO OBJ.
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
    //dispara uma outra função em um intervalo determinado.
}

new Pessoa



//THIS NOS DECLARAMOS UM OBJ, ELE SE TORNA O OBJ. OBJ CHAMA = VALIDADOR, ELE SE TORNA THIS. [ A CHAVE DE VALIDADOR É, IDADE] THIS.IDADE
//BIND SERVE PARA FIXAR A UMA VARÍAVEL A CHAVE(FUNÇÃO) DE UM OBJ. 
// NOVA VARÍAVEL
//CONST NOVA = VALIDADOR.IDADE.BIND(VALIDADOR)
//RECEBEU O OBJ, A CHAVE(FUNÇÃO), FIOXU. E R