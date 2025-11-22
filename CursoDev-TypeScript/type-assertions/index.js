var button = document.getElementById("button");
button.addEventListener("click", function (event) {
    var mouseEvent = event;
    return mouseEvent;
});
// <--------------------- Exercícios ------------------ >
/* ✅ Exercício 1 — Garantindo tipo de um valor desconhecido

Você recebe um valor com tipo unknown.
Crie uma função chamada processarValor que:
recebe um parâmetro do tipo unknown
usa type assertion para tratá-lo como string
retorna essa string em letras maiúsculas

📌 Dica:
Use as string antes de chamar .toUpperCase(). */
function processarValor(valor) {
    var valores = valor;
    return valores.toUpperCase();
}
console.log(processarValor("Bem vindos"));
/* ✅ Exercício 2 — Manipulando elemento do DOM

Simule que você pegou um elemento pelo ID:
const elemento = document.getElementById("titulo");

O TypeScript acha que isso é HTMLElement | null.

Crie uma variável chamada titulo que:
use type assertion para garantir que é um HTMLHeadingElement
depois acesse a propriedade .innerText

📌 Dica:
Use as HTMLHeadingElement. */
var elemento = document.getElementById("titulo");
console.log(elemento.innerText);
/* ✅ Exercício 3 — Convertendo número salvo como string

Você tem uma variável:

let idade: any = "25";

Crie uma função converterIdade que:
receba esse valor
use type assertion para tratá-lo como string
converta para número (Number())
retorne o número final

📌 Objetivo:
Treinar a ideia de que assertion não converte valores magicamente, você ainda precisa transformar depois. */
var idade = "25";
function converterIdade(idade) {
    var converter = Number(idade);
    return converter;
}
console.log((converterIdade(idade)));
