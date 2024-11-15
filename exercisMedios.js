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
function revertStringbyArray(value='') {
    // const array=value.split()
    // array.reverse()
    // const result=array.join('')
    // return result
    return value.split('').reverse().join('');
};
function removeAccents(value='') {
    const vocals='aeiou'
    const invalids='àèìòù'
    const characters =value.split('')

    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        if(invalids.includes(character)){
            switch (character) {
                case 'à':
                    characters[i] =vocals[0];
                    break;
                case 'è':
                    characters[i] =vocals[1];    
                    break;
                case 'ì':
                    characters[i] =vocals[2];
                    break;
                case 'ò':
                    characters[i] =vocals[3];
                    break;
                case 'ù':
                    characters[i] =vocals[4];
                    break;
            }
        }
    }
    return characters.join('')

}  
function removeAccent2(value='') {
    const vocals={
        à:'a',
        è:'e',
        ì:'i',
        ò:'o',
        ù:'u'
    };
    const invalids='àèìòù'
    const characters =value.split('')

    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        if(invalids.includes(character)){
            characters[i]=vocals[character]
    }
}
}
function removeSpaces(values=''){
    return values.replaceAll(' ','')
}

function isPalindrome(value='') {
    const valueToLowerCase=value.toLocaleLowerCase()
    //quitar los espacios
    //1.usar el string 
    const noSpacesValues=removeSpaces(valueToLowerCase)
    //2.convertir en un array...
    //const noSpacesValues = valueToLowerCase.split(' ').join('')
    const noAccentsValue=removeAccents(noSpacesValues)
    const inverseValue=revertStringbyArray(noAccentsValue)
    return inverseValue ===noAccentsValue
    
}
let sample='àtar a la rata'
console.log(sample,'is palindrome',isPalindrome(sample));
sample='marta hace'
console.log(sample,'is palindrome',isPalindrome(sample));

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
// function ispangrama(value) {
//     const vocals=['a','e','i','o','u'];
//     for (let i = 0; i < value.length; i++) {
//         const item=value[i].toLocaleLowerCase();
//          vocals.includes(item)
// }
// }
function isPangram(value='') {
    const letters='abcdefghijklmnñopqrstuvwxyz';
    let validValue=value.toLocaleLowerCase()
    validValue=removeAccents(validValue)
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if(!validValue.includes(letter)){
            return false
        }
    }
    return true
}

sample='abcdefghijklmnñopqrstuvwxyz';
console.log(sample,'is pangram',isPangram(sample));
// 5.Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

// 6.Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

// 7.Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.
function calculateAge(year=0) {
    const today= new Date()
    actualYear=today.getFullYear()
    return actualYear - year
}
console.log(calculateAge(2000));

// 8.Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.
function isOfLegal(params) {
    
}
// 9.Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

// 10.Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

// 11.Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.
function renderstonePaperScissors(userRoll ='') {
    const rolls=['piedra','papel','tijera']
    if (rolls.includes(userRoll)) {
        console.log('tirada invalida');
        return
    }
    const rollNumber=Math.round(Math.random()*2)
    machineRoll = rolls[rollNumber]

    let winner='user'
    if (userRoll===machineRoll) {
        winner='empate'
    }else if (userRoll==='piedra') {
        if(machineRoll='papel') //winner machine
        machineRoll='tijera'
    }else if (userRoll==='papel') {
        machineRoll='piedra'
        machineRoll='tijera'// winner machine
    }else {
        machineRoll='papel'
        machineRoll='piedra'
    }
    function playStonePaperScissors(value) {
        
    }

    console.log('tu opcion',option);
    console.log('opcion de la IA',rolls[roll]);
    console.log('result');
}
// 12.La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci sin superar un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.
function fibonachi(value) {
    
}
// 13.Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

// 14.Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

// 15.Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.
// crea una funcion que sume todos los numero de un array
function totalArry(array) {
    
}
function sumaNumbers(params) {
    
}