let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global) 

const ob = {}
comparaComThis = comparaComThis.bind(ob)