/* setTimeout(function(){

}, 3000) */

/* setTimeout(() => {
    alert('Olá Mundo!')
}, 5000); */

// ------------------------------------------------
/* 
setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000); */

// ----------------------------------------


/* setTimeout(() => {
    console.log('Executando a cada 2 segundos')
}, 4000);

console.log('Console depois do setTimeout') */

//----------------------------------------------------

let idDoIntervalo = setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000);
console.log(idDoIntervalo)
clearInterval(idDoIntervalo)