function salvar(req, res){
    res.send('usuario > salvar')
}

function obter(req, res){
    res.send('Obtido')
}

module.exports = {salvar, obter}
