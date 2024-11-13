//objetos literales
name='pepe'
age=22

const student ={
    name:'pepe',
    age:22,
    color:'white'
}
console.log(student);
student.age=23;
student.course='web'
delete student.color

const userName='pepe perrez'
console.log(userName.length);

userName[0]
//arrays
const data =['pepe','juan','rosa','ernestina']
console.log(data[0]);
data[0]='jose'
console.log(data[0]);
console.log(data.length);
data[data.length]='francisco'//añade a francisco automaticamente al final
console.log(data.length);
data.length=2;//esto es muy raro puede considerarse mala practica
console.log(data);
data[123]='ramom';
console.log(data);

const course ='web developer'
console.log(course.toUpperCase());

let numbers=[1,5,4,3,6,8]
numbers.includes(3)
//metodos de arrays

//mutables

//numbers[numbers.length]=45

let l=numbers.push(45)//agrega un nuevop elemento al final
console.log(numbers);
let number=numbers.pop()//elimina el ultimo elemento
console.log(number,numbers);
l =numbers.unshift(45)//inserta un nuevo elemento al comienzo
console.log(l,numbers);
//number=numbers.shift()//remueve el primer elemento
// console.log(number,numbers);
// numbers.sort()//ordena el array y hACE COSAS RARAS
// console.log(numbers);

//inmutables
const numString=numbers.join(' - ');
console.log(numString);
//const sortedNumers=numbers.toSorted(a,b)
//console.log('esto es tosorted',sortedNumers);

const matrix=[
    [1,2,3,4],
    [10,20,30,40],
    [100,200,300,400]
]
console.log(matrix.length);
console.log(matrix[0].length);
console.log(matrix[1][1]);

const rows=matrix.length
const cols=matrix[0].length
let accumulator=0;
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const row = matrix[i][j];
        accumulator += row;
        console.log(accumulator);
    }
}
//console.log(accumulator);
