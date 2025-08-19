/* 
== significa igual. Se a for 5 e b for 5, a == b retorna true. Por conta da tipagem fraca do JS, esse operador desconsidera o tipo da variável. Logo, se a for 5 (number) e b for "5" (string), a == b também retornará true

=== significa idêntico. Esse operador considera tanto o valor quanto o tipo da variável. Logo, se a for 5 (number) e b for "5" (string), a === b retornará false

!= significa diferente, desconsiderando o tipo da variável. Logo, se a for 5 (number) e b for "5" (string), a === b retornará true

!== significa não idêntico, considerando o tipo da variável. Logo, se a for 5 (number) e b for "5" (string), a === b retornará false */

const a = 5;
const b = "5";

console.log(a == b); // Retorna true
console.log(a === b); // Retorna false
console.log(a != b); // Retorna false
console.log(a !== b); // Retorna true

const c = 3;
const d = 3;

// < significa "menor que"

console.log(c < d); // Retorna false

// <= significa "menor ou igual a"

console.log(c <= d); // Retorna true

// > significa "maior que"

console.log(c > d); // Retorna false

// >= significa "maior que"

console.log(c >= d); // Retorna true