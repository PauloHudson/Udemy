function pessoa(){
    this.idade = 0
    setInterval(() => {
        idade++
        console.log(this.idade)

    },1000)
}

new pessoa()


//quando declaramos o new estamos fazendo com que a função
//se torne um obj. (construct)
//ele garante que o ultimo retorno será o this. do obj.
//ex de new.
