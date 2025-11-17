//A tipagem any está sobrescrevendo, a tipagem de number
let numberFilms: any = 30;
numberFilms = "45"

console.log(numberFilms);

//Aqui na função novamente o any esta sobre escrevendo tipagem de maneira errada
function sum(number1: any, number2: any) {
    return number1 + number2
}

console.log(sum(10, 30));
console.log(sum("60", 21));



// Exercícios

/* 📝 Exercício 1 — Variável com any
Crie uma variável com any e atribua 3 tipos diferentes a ela (número, string e objeto). */

let testAny: any = 23;
testAny = "Eduardo";
testAny = {
    nome: "Eduardo",
    idade: 23,
    cidade: "São Paulo"
}


/* 📝 Exercício 2 — Função com parâmetro any
Crie uma função chamada mostrarValor que recebe um parâmetro do tipo any e apenas imprime o valor no console. */
function mostrarValor(valor: any){
    console.log(valor);
}

mostrarValor(232352);
mostrarValor("224114");
mostrarValor(true);
mostrarValor({nome: "Eduardo"});


/* 📝 Exercício 3 — Soma quebrada
Crie duas variáveis do tipo any, atribua valores numéricos a elas e faça uma soma.
Depois troque um dos valores por uma string e veja o que acontece. */
let numero1: any = 28;
let numero2: any = 251;

console.log(numero1 + numero2);

numero2 = "46"
console.log(numero1 + numero2);

