//receba yna string e fale quantas consoantes ela tem sem as vogais..



let NoVogais = (frase) => {
    return frase.replace(/[aeiou]/ig, "")
}

console.log(NoVogais("pauloeeeeeexxxxxxx"))