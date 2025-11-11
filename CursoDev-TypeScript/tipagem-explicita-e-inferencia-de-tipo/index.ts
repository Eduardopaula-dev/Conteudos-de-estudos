//Tipagem explicita
let nome: string = "João"
nome = 232;

//Inferência de tipo
let idade = 25
idade = "Ana"

//Exercicio de tipagem explicita
let nome2: string = "maria";
let idade2: number = 30;
let online: boolean = true;

nome2 = 30
idade2 = "Maria"
online = 25

//Exercicio de inferência de tipo
let cidade = "Goiânia";
let ano = 2025;
let logado = false;

cidade = 2025
ano = false
logado = "Goiânia"

//Misturando tipos
/* let produto: {
    nome: string;
} = {
    nome: "camiseta",
    preco: 49.90,
    estoque: true
} */

//Correção
let nome3: string = "camiseta";
let produto = {
    nome3,
    preco: 49.90,
    estoque: true
}
console.log(produto);
