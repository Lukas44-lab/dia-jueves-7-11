// var -> ambito global y funcion
//let y const ambito de bloque
let a = 4
function foo() {
    let a = 5 //variabl en el ambito de la funcion
    console.log(a);//5
}
//variable en el ambito superior
console.log(a);// 4
//tirar hasta que salga un valor

function rolldiceUntil(value) {
    if (value<1 || value >6) {
        console.log('valor fuera de rango');
        return;
    }
    let accumulator =0;
    let dice= 0;
    // dice=Math.trunc(Math.random()* 6) + 1;
    // console.log('valor del dado: ',dice);
    // accumulator=accumulator+dice;
    // for(let i = 0; true !==value; i++){
    //     if (dice === value) {
    //         break;
    //     }
    //     //acumulator += dice
    // }
    while(dice !== value){
    dice=Math.trunc(Math.random()* 6) + 1;
    console.log('valor del dado: ',dice);
    accumulator+=dice;
    }
    console.log('total', accumulator);
}
rolldiceUntil(6)
