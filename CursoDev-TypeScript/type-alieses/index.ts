type id = number | string;

let idCustumer: id;

idCustumer = 1211;
idCustumer = "wdqgqqfw";

let idProduct: id;

idProduct = "Sapato";
idProduct = 23.99;

// Maneira inteligente de mudar a formatação do seu código
type id2 = number

let idCustumer2: id2;

idCustumer2 = 1211;
idCustumer2 = "wdqgqqfw";

let idProduct2: id2;

idProduct2 = "Sapato";
idProduct2 = 23.99;



// Exercícios

/* ✅ Exercício 1 — Criar um Type Alias simples

Crie um type alias chamado UserStatus que pode ser "online", "offline" ou "busy".
Depois, crie uma função que recebe um UserStatus e retorna uma mensagem diferente para cada caso.

Dica: Use union types dentro do type alias. */

type UserStatus = "online" | "offline" | "busy" 

function userStatus(User: UserStatus) {
    if (User === "online") {
        return `O usuário está ${User}`
    } else if (User === "offline") {
        return `O usuário está ${User}`
    } else {
        return `O usuário está ${User}`
    }
}

console.log(userStatus("busy"));

//Correção do meu código, na forma encurtada
function userStatus2(user: UserStatus): string {
    return `O usuário está ${user}`
}

console.log(userStatus2("online"));


/* 📝 Exercício 2 — Formatar nota
Crie um type alias chamado Nota que pode ser:
número
"Aprovado"
"Reprovado"
Sua função deve receber uma Nota e:
Se for número → retornar "Nota numérica: X"
Se for string → retornar "Status: X"
Use typeof para identificar o tipo. */

type Nota = number | "Aprovado" | "Reprovado"

function notas(valor: Nota) {
    if (typeof valor === "number") {
        return `Nota numérica: ${valor}`
    } else if (typeof valor === "string") {
        return `Status: ${valor}`
    }
}

console.log(notas("Aprovado"));

//Versão corrigida/encurtada
function notas2(valor: Nota) {
    return typeof valor === "number"
        ? `Nota numérica: ${valor}`
        : `Status: ${valor}`
}

console.log(notas2("Aprovado"));


/* 📝 Exercício 3 — Mostrar idade ou mensagem

Crie um type alias chamado IdadeOuMensagem que pode ser:
number
string
Depois crie uma função que:
Se receber número → retorna "Idade recebida: X"
Se receber string → retorna "Mensagem recebida: X" */

type IdadeOuMensagem = string | number

function mensagem(nota: IdadeOuMensagem) {
    return typeof nota === "string"
        ? `Idade recebida: ${nota}`
        : `Mensagem recebida: ${nota}`
}

console.log(mensagem(18));

// Correção do meus erros
function mensagem2(nota: IdadeOuMensagem) {
    return typeof nota === "number"
        ? `Idade recebida: ${nota}`
        : `Mensagem recebida: ${nota}`;
}

console.log(mensagem(18));
console.log(mensagem("Tudo certo!"));

//Oque mudou foi typeof