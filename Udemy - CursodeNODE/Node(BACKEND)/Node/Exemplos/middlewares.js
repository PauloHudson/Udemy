//middlewawre patter(chain of responsability)
//ctx contexo ------- obj que vai sendo apssado de um middleware para outro...m
//next próximo -- vai desparar o próximo passo da cadeia
const passo1 = (ctx, next) =>{
    ctx.valor = 'mid1'
    next()
}


const passo2 = (ctx, next) =>{
    ctx.valor2 = "mid2"
    next()
}

const passo3 = ctx => ctx.passo3 = 'mid3'



//0 ... vai receber váris funções e vai juntar tudo em um array...
const executor = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))

    }
    execPasso(0)
}

const ctx = {}
executor(ctx, passo1, passo2, passo3)
console.log(ctx)