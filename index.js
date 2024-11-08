// function greeting(){
//     const question='¿como te llamas?';
//     const username =prompt(question);
//     if(username !== null){
//         const response='hola, '+username+' que tal estas';
//     alert(response) 
//     }
    
// }
function greeting(){
    const question='¿como te llamas?';
    const username =prompt(question);
    if(username === null || username==='')return;
    const response='hola, '+username+' que tal estas';
    alert(response) 
    }
const button=document.querySelector('form button');
button.addEventListener('click', greeting);

