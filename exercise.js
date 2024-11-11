// 1-Imprime por consola el string 'Hello World'.
const greeting='Hello word'
console.log(greeting);
// Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
let variable1='variable let '
const variable2='variable const'
console.log(variable1+'y '+variable2);

// 2-Cambia ahora el valor de una de las dos variables e imprime por consola.
variable1=33
console.log(variable1+' y '+variable2);

// 3-Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
const number1=2;
const number2=4;
const result=number1+number2
console.log(result);
 
// 4-Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
const greeting2='hola '
const firstName='pepe'
console.log(greeting2+firstName);

// 5-Crea una función que imprima por consola el string 'Hello World'.
function render(value){
    console.log(value);   
}
render('hello word')
// 6-Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
function multiplication(a,b) {
    const operation=a*b
    console.log(operation);
}
multiplication(2,2)

function multi(a,b) {
    return a+b
}
console.log(multi(2,2));
// Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function cube(a) {
    const result=a **3
    return result  
}
render(cube(3))

// Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
function areaRectangle(a,b) {
    const result=a*b
    return result
};
render(areaRectangle(3,4))
//forma 2
function areaRectangleOrtriangle(a,b,isRectangle) {
    let result;
    if(isRectangle){
        result =a*b;
        return result
    }
    result= (a*b)/ 2; 
    return result
};
render(areaRectangleOrtriangle(3,4,false))
//operador ternario
function areaRectangleOrtriangle2(a,b,isRectangle) {
    return isRectangle ? a*b :(a*b) / 2;
};
render(areaRectangleOrtriangle2(2,5,true));
// Crea una función que imprima por consola un número entero al azar entre 0 y 10 .
//Math.random() numero pseudo aleatorio entre 0 y 1
function randomNumber() {
    const r=Math.random() * 9 + 1;
    return Math.trunc(r)
};

render(randomNumber())
/*Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario 
 a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime
 por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número 
 correcto.*/

function app() {
    const expected=randomNumber()
    const numeroUsuario=prompt('pon un numero del 1 al 10');
    const isCorrect= expected ===Number(numeroUsuario);
    if(isCorrect){
      render('has acertado');
    }else {
    render(`no acertaste, el numero era ${expected}`);  
}
}
//vercion ternario
function app2() {
    const expected=randomNumber()
    const numeroUsuario=prompt('pon un numero del 1 al 10');
    const isCorrect= expected ===Number(numeroUsuario);
    const result=isCorrect?'has acertado': `no acertaste, el numero era ${expected}`;
    render(result);  
}




// Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
function parImpar(a) {
    if(a%2===0){
        console.log('tu numero es par');
    }else{
        console.log('tu numero es impar');  
    }
}
parImpar(2)
// Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

// Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
function multiplicaciónTable(a) {
    console.log('tabla de multiplicacion de: '+a);
    for (let i = 1;i <=10; i++) {
        console.log(`${a} x ${i}= ${a*i}`);
    }
}
multiplicaciónTable(2)
// Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.
function primeNumber(a) {
    if (a) {
        
    }
}