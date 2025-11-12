const stringNumber: [string, number] = ["Roberto", 40];
const stringNumberError: [string, number] = ["Roberto", "40"];

//UseState em Typescript
let color: [number, number, number] = [255, 0, 255];

//Elementos opcionais
let bgColor : [number, number, number, number?] = [0, 0, 0];
bgColor = [0, 0, 0, 0.5];

//Exercicio
let carro: [nome: string, ano: number, vendido: boolean] = ["Hilux", 2014, true]
console.log(`Carro; ${carro[0]}, Ano: ${carro[1]}, Vendido: ${carro[2] ? "Sim" : "Não"}`);

