const obj = {nome: "paulo"}

console.log(obj)
obj.idade = 20
console.log(obj)
Object.freeze(obj)
//com isso o obj nunca mais mudaria.. el ficaria congelado.
//nós não estamos mudando a var obj, e sim o seu dado "nome"...