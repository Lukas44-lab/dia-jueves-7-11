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

//coercion
let v1= 3
let v2= '4'
console.log(v1*v2); //v2 coherciona a number ---Resultado 12
console.log(typeof v2);//seguira siendo string

console.log(v1+v2);//v1 coherciona a string Resultado 34
console.log(typeof v2); //seguira siendo string
//casting a number de V2
console.log(v1+ Number(v2));//aka fuerzo el casting yo 
console.log(true + false);

//booleans

// falsies -> false--- son 8
//false-0-''-
Boolean(false)
Boolean(0)
Boolean('')
Boolean(undefined)
Boolean(null)
Boolean(0n)
Boolean(NaN)
Boolean(-0)

//todos exeptoesto estos 8 dan true



