// && (AND) - Se dois valores forem verdadeiros(true), ele retorna

const numero1 = 2
const numero2 = 3

console.log(numero1 === numero2 && numero1 <= numero2);

const numero3 = 2
const numero4 = 2

console.log(numero3 === numero4 && numero3 <= numero4);

// || (OR) - Ele retorna true se um dos dois oparadores for verdadeiro

console.log(numero1 === numero2 || numero1 <= numero2);

if (numero1 === numero2 || numero1 <= numero2) {
    console.log("Verdadeiro")
}

// ! (NOT) - Retorna true, se o operador for false

const hasError = false
console.log(hasError); //false

if (hasError) {
    console.log("Não há erros !");
}

console.log(!hasError) //true

if (!hasError) {
    console.log("Há erros !!");
    
}
