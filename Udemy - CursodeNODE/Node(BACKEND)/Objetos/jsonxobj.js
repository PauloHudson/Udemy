//formato textual .json
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(a, b, c){
        return a + b + c
    }
}
console.log(JSON.stringify(obj))
//converterá para json 
//ele excluiu a function já que é um formato textual.

//console.log(JSON.parse("{ a: 1, b:2, c:3 }")) errado
//console.log(JSON.parse("{ "a: 1, "b":2, "c":3 }")) errado
console.log(JSON.parse('{"a":1, "b": 2, "c": 3}'))
//transformar um json em obj.