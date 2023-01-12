//uma função callback é uma função que recebe uma outra função como parametro para executar

//ela está esperando receber uma função como parametro
//callback se torna MeuNome
//uma vez ligadas, ela executa afunção Meun ome
//que recebe o paraemtro name de inserir 
//as linka
// e executa paralelamente as suas ações.
const Inserir = (callback) =>{
    let name = 'Paulo'
    callback(name)
}

const MeuNome = (name) =>{
    console.log(`Olá, ${name}`)
   
}

Inserir(MeuNome)