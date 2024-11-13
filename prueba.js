// Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

function revertString(value) {
    let accumulator='';
    for (let i = value.length-1; i>=0; i--) {
        const element = value[i];
        accumulator=accumulator+element ;
    }
    return accumulator
}
console.log(revertString('3hola3'));
