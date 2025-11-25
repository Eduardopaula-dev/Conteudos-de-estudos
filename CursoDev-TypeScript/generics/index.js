function makeArray(num) {
    return [num];
}
var numbers = makeArray(12);
console.log(numbers);
var names = makeArray("Ricardo");
//Deixando como generics
function makeArray2(item) {
    return [item];
}
var numbers2 = makeArray2(12);
console.log(numbers2);
var names2 = makeArray2("Ricardo");
console.log(names2);
//Exercícios
/* 🚀 Exercício 1 — Função genérica "retorna o valor"

Crie uma função genérica chamada identidade que:
Receba um valor de qualquer tipo
Retorne esse valor
Use um tipo genérico <T>

Exemplo esperado de uso:
identidade(10);
identidade("Olá");
identidade(true); */
function identidade(item) {
    return item;
}
identidade(10);
identidade("Olá");
identidade(true);
var minhaListaNumbers = {
    itens: [],
    adicionar: function (item) {
        this.itens.push(item);
    }
};
var minhaListaStrings = {
    itens: [],
    adicionar: function (item) {
        this.itens.push(item);
    }
};
minhaListaNumbers.adicionar(10);
minhaListaNumbers.adicionar(20);
minhaListaStrings.adicionar("Olá");
minhaListaStrings.adicionar("Mundo");
console.log(minhaListaNumbers);
console.log(minhaListaStrings);
