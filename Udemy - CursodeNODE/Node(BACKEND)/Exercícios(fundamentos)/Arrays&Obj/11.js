//escrevwer uma func que o primeiro parametro seja um obj, e o segundo alguma chave desse obj, retornar uma cópia desse obj sem a chave especificada.

let RemoverPropriedade = (obj, deletador) => {
    const copia = {...obj}
    delete copia[deletador]
    console.log((copia))
}

RemoverPropriedade({a: 1, b: 2}, "a")
