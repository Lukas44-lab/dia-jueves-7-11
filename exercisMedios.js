// 1Crea una función que elimine el primer y último caracter de un string recibido por parámetros.
function removeLastFirst(value='') {
    let result=''
    for (let i = 1; i < value.length-1; i++){
        result += value[i];       
    }
    const r =value.slice(1,value.length-1)
    return r
}
console.log(removeLastFirst('hola'));

// 2Escribe una función que reciba una palabra y revise si es un palíndromo.

// 3Crea una función que cuente las vocales que contiene una palabra dada por parámetros.
function countVocales(value ='') {
    let accumulator=0
    const vocals=['a','e','i','o','u'];//tambien se puede poner 'aeiou'
    for (let i = 0; i < value.length; i++) {
        const item=value[i].toLocaleLowerCase();
        accumulator += vocals.includes(item);
        // if (vocals.includes(item)) {
        //     accumulator++
        // }
    }
    return accumulator
}
console.log(countVocales('murcielago verde'));

// 4Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).

// Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

// Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

// Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

// Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.

// Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

// Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

// Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

// La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

// Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

// Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

// Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.