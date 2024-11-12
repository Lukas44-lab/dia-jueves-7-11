// var -> ambito global y funcion
//let y const ambito de bloque
let a = 4
function foo() {
    let a = 5 //variabl en el ambito de la funcion
    console.log(a);//5
}
//variable en el ambito superior
console.log(a);// 4
//
