// == - operador de igual, leva após o valor em consideração e não qual o tipo dela
const numero1 = 3;
const numero2 = 5;

console.log(numero1 == numero2);

const numero3 = 5;
const numero4 = "5";

console.log(numero3 == numero4);


// === - operador identico, considera tanto o valor e tipo

const numero5 = 3
const numero6 = "3"

console.log(numero5 === numero6)

const numero7 = 3
const numero8 = 3

console.log(numero7 === numero8);

//!== - não identico, teste se são de tipos diferente

const numero9 = 3
const numero10 = 3

console.log(numero9 !== numero10);


//!= não igual, testa se os valores são iguais, mas ignora o tipo

const numero11 = 2
const numero12 = "10"

console.log(numero11 != numero12);


//menor que e menor ou igual

const numero13 = 3
const numero14 = 5

console.log(numero13 <= numero14);

//maior que e maior ou igual

console.log(numero13 >= numero14)

//menor que 
console.log(numero13 < numero14)

//maior que 
console.log(numero13 > numero14)