

//receber array e vai 

let array = (x) => {
    let primeiro = x.shift()
    let segundo = x.pop()
    return [primeiro, segundo]

}

console.log(array([2, 5, 6]))