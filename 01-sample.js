//declaracion de una funcion
function add(a,b) {
    //parametros a y b
    const result=a+b
    console.log(result);//efecto
    return result // resultado
}
add(2,4)//argumentos 2,4
let x=12
let z=2

add(x,z)

//esta Mal
const f=2 

function foo() {
    
    return f
}
console.log(foo());
