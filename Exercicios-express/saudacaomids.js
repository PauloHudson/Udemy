function saudacao(nome){
    //₢aso quisessemos que ele retornasse o nome em tempalte teriamos de retornar uma midleware
    return function(req, res, next){
        console.log(`Seja Bem vindo ${nome}`)
        next()
    }
          
    
    
}

module.exports = saudacao